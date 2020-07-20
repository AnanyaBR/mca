const mongoose = require('mongoose')

const configureDB=()=>{
    mongoose.connect('mongodb://localhost:27017/mca', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log(err)
    })
}

module.exports = configureDB