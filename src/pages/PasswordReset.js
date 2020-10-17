import React, { useState, useEffect } from 'react'
import '../assets/css/PasswordReset.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function PasswordReset() {

    const email = useFormInput('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleSubmit = () => {
        setError(null)
        setLoading(true)
        axios.post('https://alx-ims.herokuapp.com/api/v1/reset',
            {
                email: email.value,
            }
        ).then(response => {
            setLoading(false)
            setOpen(true);
            setError(response.data.message + " " + "to reset your password")

        }).catch(error => {
            setLoading(false)
            setOpen(true);
            const status = error.response.data.status;
            const message = error.response.data.message;
            console.log(message)
            console.log(status)
            if (status === '400') return setError("Check your email to reset your password")
            else setError("Something went wrong. Please try again later!")
        })

    }

    return (
        <div className={classes.root}>
            <div className="passwordReset">
                <NavBar />
                <p>If the email exists you will receive a password reset link to your email.</p>
                <div className="passwordReset__container">
                    <div className="passwordReset__form">
                        <h2>Reset Email</h2>
                        <div className="passwordReset__emailInput">
                            <EmailIcon className="passwordReset__icon" />
                            <input type="text" {...email} placeholder="Email" />
                        </div>
                        <input className="login__btn" type="button" value={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} disabled={loading} /><br />
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert className="login__snackbar" onClose={handleClose} severity="success">
                                {error && <><small>{error}</small><br /></>}
                            </Alert>
                        </Snackbar>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default PasswordReset
