const express = require('express')
const mongoose = require('mongoose')
const route = require('./route/route')
mongoose.set('strictQuery', true);

const app = express()


app.use(express.json())
mongoose.connect("mongodb+srv://Shukla123:Shukla123@cluster0.vyd2nui.mongodb.net/Shukla", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);
app.use("/*",function(req,res){

    res.status(400).send({status:false ,message:"Wrong path! "})
}
)

app.listen( 3000, function () {
    console.log('Express app running on port ' + (3000))
});