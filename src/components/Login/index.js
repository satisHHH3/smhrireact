import {Component} from 'react'
import Cookies from "js-cookie"
import { Redirect,Link } from 'react-router-dom'

import "./index.css"

class Login extends Component{
    state = {username:"",password:"",showPassword:false,errMsg:"",showErr:false}

    onLoginSuccess = (token) => {
        const {history} = this.props
        console.log(history)
         Cookies.set("jwt_token",token, {expires:30})
         history.replace('/')
         
    }

    onLoginFailure = (err) => {
        this.setState({errMsg:err,showErr:true})
    }

    onSubmitUserDetails = async (event) => {
        event.preventDefault()
        const {username,password} = this.state

        const userDetails = {
            username,
            password
        }

        

        const url = "https://cloudconnectcampaign.com/smhri/api/token/"

        const options = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url, options)
        
        if(response.ok){
            const data = await response.json()
            this.onLoginSuccess(data.access)
        }else{
            const data = await response.json()
            this.onLoginFailure(data.detail)
            console.log(data)
        }
       
    }

    onChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onClickShowPassword = () => {
        this.setState((prevState) => ({showPassword: !prevState.showPassword}))
    }

    render(){
        const {username,password,showPassword,errMsg,showErr} = this.state
        const inputType = showPassword ? "text" : "password"

        const jwt = Cookies.get("jwt_token")
        console.log(jwt)
        if(jwt !== undefined){
           return <Redirect to='/'/>
        }
       
        return(
            <>
            <div className='bg-container'>
               
                <form className='form-container' onSubmit={this.onSubmitUserDetails}>
                    <h1 className='login-head'>Login</h1>
                    {showErr && <p className='err'>*{errMsg}</p>}
                    <label htmlFor='user' className='label'>USERNAME</label>
                    <input id="user" type="text" className='input' value={username} onChange={this.onChangeUsername}/>
                    <label htmlFor='password' className='label'>PASSWORD</label>
                    <input id="password" type={inputType} className='input' value={password} onChange={this.onChangePassword}/>
                    <div className='input-container'>
                    <input id="check" type="checkbox" onClick={this.onClickShowPassword}/>
                    <label htmlFor='check' className='check-label'>Show Password</label>
                    </div>
                    <button type="submit" className='login-button'>Login</button>
                    <p>Don't have an account? <Link to="/signup" className="link">Signup</Link></p>
                </form>
                
            </div>
            </>
        )
    }
}

export default Login