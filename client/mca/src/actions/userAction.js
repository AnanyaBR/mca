import axios from 'axios'

export const startRegisterUser=(formData)=>{
    return(dispatch)=>{
        //console.log('action generator', formData)
        axios.post('/users/register', formData)
        .then((response)=>{
            console.log(response.data)
        })
    }
}