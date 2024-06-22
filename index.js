const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json())


const users = require('./routes/users')
app.use('/users', users)

let port = process.env.PORT || 3001
try{
    app.listen(port, () => {
        console.log('Server Running on port 3001');
    })
}catch(e){
    console.log(e)
}

