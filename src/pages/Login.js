import React, { useState } from 'react'
import '../assets/css/Login.css'
import Logo from '../assets/img/logo.jpeg'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import { setUserSession } from '../Utils/Common'

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

function Login() {

    const history = useHistory()
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

    const handleLogin = () => {
        setError(null)
        setLoading(true)
        axios.post('https://alx-ims.herokuapp.com/api/v1/auth/login',
            {
                email: email.value,
                password: password.value
            }
        ).then(response => {
            setLoading(false)
            setOpen(true);
            setUserSession(response.data.token, response.data.user)
            history.push('/dashboard')
            
        }).catch(error => {
            setLoading(false)
            setOpen(true);
            const status = error.response.data.status;
            const message = error.response.data.message;
            console.log(message)
            if (status === '401') return setError(message)
            else setError("Something went wrong. Please try again later!")
        })

    }

    return (
        <div className={classes.root}>
            <div className="login">
                <h1>Welcome Back to ALX-IMS</h1>
                <div className="login__container">
                    <div className="login__containerImage">
                        <img src={Logo} alt="Banner" />
                    </div>
                    <div className="login__containerCard">
                        <h2>Login to Your Account</h2>
                        <div className="login__emailInput">
                            <EmailIcon className="login__icon" />
                            <input type="text" {...email} placeholder="Email" />
                        </div>
                        <div className="login__passwordInput">
                            <LockIcon className="login__icon" />
                            <input type="password" {...password} placeholder="Password" />
                        </div>
                        <div className="login__reset">
                            <p>Forgot password? <span><Link className="login__link" to="/reset">Reset</Link></span></p>
                        </div>

                        <input className="login__btn" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert className="login__snackbar" onClose={handleClose} severity="success">
                                {error && <><small>{error}</small><br /></>}
                            </Alert>
                        </Snackbar>
                    </div>
                    <div className="login__containerContent">
                        <p>No account yet? <span><Link className="login__link" to="/sign-up">Sign Up</Link></span></p>
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


export default Login
