import axios from '../config/axios'

export const startRegisterUser=(formData, redirect)=>{
    return(dispatch)=>{
        //console.log('action generator', formData)
        axios.post('/users/register', formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert(response.data.message)
            }else{
                alert('registered successfully')
                redirect()
            }
            //console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}