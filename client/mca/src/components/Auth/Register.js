import React from 'react'
import {connect} from 'react-redux'
import {startRegisterUser} from '../../actions/userAction'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            role:'',
            username:'',
            email:'',
            mobile_no:'',
            password:'',
            passwordState: false
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleRole=(role)=>{
        this.setState({role})
    }

    handleCheckbox=()=>{
        this.setState(prevState=>({
            passwordState:!prevState.passwordState
        }))
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData = {
            role:this.state.role,
            username: this.state.username,
            email: this.state.email,
            mobile_no: this.state.mobile_no,
            password:this.state.password
        }
        //console.log(formData)

        const redirect=()=>{
            return this.props.history.push('/users/login')
        }
        this.props.dispatch(startRegisterUser(formData, redirect))
    }

    render(){
        //console.log(this.state)
        return(
            <div className="row">
                <div className="col-md-5 offset-md-4">
                <h3>Register here</h3>
                <form onSubmit={this.handleSubmit}>
                    
                    
                    <label className = "mr-2">Select Your Self As</label>

                    <div className="form-check form-check-inline">
                    <input type="radio"  id ="roleDoctor" name="role" value={this.state.role} onChange={()=>{
                        this.handleRole('doctor')
                    }} checked ={this.state.role === 'doctor'} className="form-check-input"/>
                    <label htmlFor="roleDoctor" value="doctor" className="form-check-label">Doctor</label>
                    </div>

                    <div className="form-check form-check-inline">
                    <input type="radio" id="rolePatient" name="role" value={this.state.role}  onChange={()=>{
                        this.handleRole('patient')
                    }} checked ={this.state.role === "patient"} className="form-check-input"/>
                    <label htmlFor="rolePatient" value="patient" className="form-check-label">Patient</label>

                    </div>
                    
                    <div className="form-group">
                    <label htmlFor="username">UserName</label>
                    <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange}  className="form-control"/>
                    </div>

                    <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={this.state.email} onChange={this.handleChange} className="form-control"/>

                    </div>

                    <div className="form-group">
                    <label htmlFor="mobileNo">Mobile No</label>
                    <input type="text" id="mobileNo" name="mobile_no" value={this.state.mobile_no} onChange={this.handleChange} className="form-control"/>

                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <input type={this.state.passwordState ? 'text' : 'password'} name='password' value={this.state.password} onChange={this.handleChange} className="form-control"/>

                    </div>

                    <div className="form-group">
                    <input type="checkbox" value={this.state.passwordState} checked={this.state.passwordState} name="passwordState" onChange={this.handleCheckbox} />
                    <label>Show Password</label>

                    </div>
                  
                    <input type= "submit" value="register" className="btn btn-secondary"/>
                </form>
                </div>
                
            </div>
        )
    }


}

export default connect()(Register)