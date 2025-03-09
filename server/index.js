const express = require('express')
const router = require("./routes")
const app = express();
const path = require("path")
const cors = require('cors')
const {connectToMongoDB} = require('./database')

app.use(express.json())
app.use(express.static(path.join(__dirname,'build')));


app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,"build/index.html"))
})
app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"Hello,World!"})
})

app.use("/api",router)
app.use(cors())


const port =5000

async function startServer() {
    await connectToMongoDB();
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`);
        
    })
}
startServer();