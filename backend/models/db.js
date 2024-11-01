const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/auth-app')
.then(()=>console.log('Database connected'))
.catch(()=>console.log('Some database error'))