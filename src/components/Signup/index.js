import {Link} from 'react-router-dom'
import {Component} from 'react'

import "./index.css"

class Signup extends Component{
    state = {username:"",password:"",first_name:'',last_name:"",email:'',password1:''}

    onSubmitUserDetails = async (event) => {
        event.preventDefault()
        const {username,password,first_name,last_name,email,password1} = this.state

        const userDetails = {
            username,
            password,
            first_name,
            last_name,
            email,
            password1
        }

        console.log(userDetails)

        const url = "https://cloudconnectcampaign.com/smhri/api/register/"

        const options = {
            method: "POST",
            headers: {
                "Content-Type": `application/json`
            },
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url,options)
        const data = await response.json()
        console.log(data)
    }

    onChangeUsername = (e) => {
        this.setState({username: e.target.value})
    }

    onChangePassword = (e) => {
        this.setState({password: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    onChangeFirstname = (e) => {
        this.setState({first_name: e.target.value})
    } 
    
    onChangeLastname = (e) => {
        this.setState({last_name: e.target.value})
    } 
    
    onChangeConfirmPassword = (e) => {
        this.setState({password1: e.target.value})
    }

   

    render(){
        const {username,password,first_name,last_name,email,password1} = this.state
        
        
        return(
            <>
            <div className='bg-container'>
               
                <form className='form-container' onSubmit={this.onSubmitUserDetails}>
                    <h1 className='login-head'>SIGN UP</h1>
                  <div className='input-container'>
                        <label htmlFor='user' className='label'>USERNAME</label>
                        <input id="user" type="text" className='input' value={username} onChange={this.onChangeUsername}/>            
                    </div>

                    <div className='input-container'>
                        <label htmlFor='email' className='label'>EMAIL ADDRESS</label>
                        <input id="email" type="text" className='input' value={email} onChange={this.onChangeEmail}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='first name' className='label'>FIRST NAME</label>                   
                        <input id="first name" type="text" className='input' value={first_name} onChange={this.onChangeFirstname}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='last name' className='label'>LAST NAME</label>                    
                        <input id="last name" type="text" className='input' value={last_name} onChange={this.onChangeLastname} required/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='password' className='label'>PASSWORD</label>                    
                        <input id="password" type='password' className='input' value={password} onChange={this.onChangePassword}/>
                    </div>

                    <div className='input-container'>
                        <label htmlFor='confirm password' className='label'>CONFIRM PASSWORD</label>
                        <input id="confirm password" type='password' className='input' value={password1} onChange={this.onChangeConfirmPassword} required/>                    
                    </div>
                    <button type="submit" className='login-button'>SIGN UP</button>
                    <p>Already have an account? <Link to="/login" className="link">Login</Link></p>
                </form>
            </div>
            </>
        )
    }
}

export default Signup