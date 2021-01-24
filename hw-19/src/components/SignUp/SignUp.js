import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {NavLink} from 'react-router-dom';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            isRemember: 'off'
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <div className='wrapper'>
                <form>
                <Avatar className='avatar'>
                    <LockOutlinedIcon color="primary" />
                </Avatar>
                <h2>Sign Up</h2>
                    <div>
                        <input typr="text"
                            placeholder="First Name"
                            name='firstName'
                            onChange={this.onChangeHandler}
                        />
                        <input typr="text"
                            placeholder="Last Name"
                            name='lastName'
                            onChange={this.onChangeHandler}
                        />
                    </div>
                    <input typr="text"
                        placeholder="Email Adress"
                        name='email'
                        onChange={this.onChangeHandler}
                    />
                    <input typr="text"
                        placeholder="Password"
                        name='password'
                        onChange={this.onChangeHandler}
                    />
                    <div className='remember-wrapper'>
                        <label><p>I want to receive information, marketing</p>
                            <p>promotions and updates via email</p> </label>
                        <input className='remember'
                            type="checkbox"
                            name='isRemember'
                            onChange={this.onChangeHandler}
                        />
                    </div>
                </form>
                <button className='button'>Sign Up</button>
                <div className='nav'>
                    <NavLink to='/signin'>Already have an account? Sign In</NavLink>
                </div>
            </div>
        )
    }
}

export default SignUp;
