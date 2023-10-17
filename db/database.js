const {MongoClient} = require('mongodb');

const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.DB_URL;

const client = new MongoClient(uri);

async function connectToDatabase(req, res, next){
    try {
        await client.connect();
        console.log("Datavase connection is successful");
        const database = client.db("sample-crud2");
        const collection = database.collection("user-details");

        req.db = database;
        req.collection = collection;
        next();
    } catch (error) {
        res.status(500).json({
            status: "failure",
            message: error.message
        })
    }
}

module.exports = connectToDatabase;