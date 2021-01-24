import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isRemember: 'off'
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton = () => {

    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <Container className="wrapper">
                <form className='form'>
                <Avatar className='avatar'>
                    <LockOutlinedIcon color="primary" />
                </Avatar>
                <h2>Sign In</h2>
                    <input type='text'
                               placeholder='Enter email'
                               name='email'
                               onChange={this.onChangeHandler}
                    />
                    <input type='text'
                               placeholder='Enter password'
                               name='password'
                               onChange={this.onChangeHandler}
                    />
                    <div className='remember-wrapper'>
                        <label>Remember me</label>
                        <input className='remember'
                               type="checkbox"
                               name='isRemember'
                               onChange={this.onChangeHandler}
                        />
                    </div>
                </form>
                <button type="submit" className='button' onClick={this.onClickButton}>Sign In</button>
                <Grid className='nav'> 
                    {/* <NavLink to='/forgotpassword'>Forgot password?</NavLink> */}
                    <NavLink to='/signup'>Don`t have an account? Sign Up</NavLink>
                </Grid>
            </Container>
        )
    }
}

export default SignIn;
