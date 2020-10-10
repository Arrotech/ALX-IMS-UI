import React, { useState } from 'react'
import '../assets/css/SignUp.css'
import Logo from '../assets/img/logo.jpeg'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'

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

function SignUp() {

    const history = useHistory()
    const firstname = useFormInput('')
    const lastname = useFormInput('')
    const phone = useFormInput('')
    const username = useFormInput('')
    const email = useFormInput('')
    const password = useFormInput('')
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

    const handleSignUp = () => {
        setError(null)
        setLoading(true)
        axios.post('https://alx-ims.herokuapp.com/api/v1/auth/register',
            {
                firstname: firstname.value,
                lastname: lastname.value,
                phone: phone.value,
                username: username.value,
                email: email.value,
                password: password.value
            }
        ).then(response => {
            setLoading(false)
            setOpen(true);
            history.push('/login')
        }).catch(error => {
            setLoading(false)
            setOpen(true);
            const status = error.response.data.status;
            const message = error.response.data.message;
            if (status != '201') setError(message)
            else setError("Something went wrong. Please try again later!")
        })

    }

    return (
        <div className={classes.root}>
            <div className="signup">
                <h1>Welcome Onboard</h1>
                <div className="signup__container">
                    <div className="signup__left">
                        <img src={Logo} alt="Signup Banner" />
                        <div className="signup__topLeft"><Link className="signup__link" to="/sign-up">SignUp</Link></div>
                        <div className="signup__centered">ALX-IMS</div>
                        <div className="signup__centeredParagraph">
                            <p>If you want to know more about us consider signing up.</p>
                            <p>You get to manage all of your information at a go.</p>
                        </div>
                    </div>
                    <div className="signup__right">
                        <h2>Create New Account</h2>
                        <div className="signup__card">
                            <div className="signup__firstname">
                                <input type="text" {...firstname} placeholder="Firstname" />
                            </div>
                            <div className="signup__lastname">
                                <input type="text" {...lastname} placeholder="Lastname" />
                            </div>
                            <div className="signup__phone">
                                <PhoneIcon />
                                <input type="text" {...phone} placeholder="Phone" />
                            </div>
                            <div className="signup__username">
                                <PersonIcon />
                                <input type="text" {...username} placeholder="Username" />
                            </div>
                            <div className="signup__email">
                                <EmailIcon />
                                <input type="text" {...email} placeholder="Email" />
                            </div>
                            <div className="signup__password">
                                <LockIcon />
                                <input type="password" {...password} placeholder="Password" />
                            </div>
                            <div className="signup__account">
                                <p>Already have an account? <span><Link className="signup__loginlink" to="/login">Login</Link></span></p>
                            </div>
                            <input className="signup__btn" type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleSignUp} disabled={loading} /><br />
                            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                <Alert className="signup__snackbar" onClose={handleClose} severity="success">
                                    {error && <><small>{error}</small><br /></>}
                                </Alert>
                            </Snackbar>
                        </div>
                    </div>
                </div>
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

export default SignUp
