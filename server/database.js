require('dotenv').config();
const {MongoClient,ServerApiVersion} = require("mongodb");

const url = "mongodb+srv://nandunalla03:nandunalla@cluster0.pcnxl.mongodb.net/todosdb?retryWrites=true&w=majority&appName=Cluster0"

const options = {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    }
}
let client;
const connectToMongoDB = async() =>{
    if(!client){
        try {
            client = await MongoClient.connect(url,options);
            console.log("Connected to MongoDB");
            
        } catch (error) {
            console.log(error);
            
        }
    }
    return client;
}

const getConnectedClient = () => client;

module.exports = {connectToMongoDB,getConnectedClient};