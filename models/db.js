const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://rock33430:uFj33lR9aGy7XfV3@cluster0.tvhrbcf.mongodb.net/'

const client = new MongoClient(uri);

let myDb = null;
const connectDbAndStartServer = async () => {
    try{
        myDb = client.db("demo")
        console.log('Database Connected')
    }
    catch(e){
        console.log(e)
    }
}


connectDbAndStartServer()


module.exports = myDb