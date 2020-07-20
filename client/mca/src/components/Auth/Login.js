import React from 'react'

class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email_or_mob:'',
            password:'',
            passwordState:false
        }

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleCheckbox=()=>{
        this.setState(prevState=>({
            passwordState:!prevState.passwordState
        }))
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-5 offset-md-4">
                <h3>Login Here</h3>
                <form >

                    <div className="form-group">
                    <label htmlFor="email_or_mobile">Email/Mobile No</label>
                    <input type="text" id="email_or_mobile" value={this.state.email_or_mob} name="email_or_mob" onChange={this.handleChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                    <lable htmlFor="password">Password</lable>
                    <input type={this.state.passwordState ? "text" : "password"} id="password" value={this.state.password} name="password" onChange={this.handleChange} className="form-control"/>
                    </div>

                    <div className="form-group">
                    <input type="checkbox" value={this.state.passwordState} checked={this.state.passwordState} name="passwordState" onChange={this.handleCheckbox}/>
                    <label>Show Password</label>
                    </div>
                    
                    
                
                   <input type="submit" value="login"  className="btn btn-primary"/>
                </form>
                </div>
                
            </div>
            
        )
    }
}

export default Login