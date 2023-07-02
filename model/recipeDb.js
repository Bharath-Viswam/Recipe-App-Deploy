const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://bharath:bharathviswam@firstclustertest.jgypz.mongodb.net/recipemstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected");
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const recipeSchema = new Schema({
image:String,
title:String,
duration:Number,
servings:Number,
cuisine:String,

})

var recipeModel = mongoose.model("recipe",recipeSchema)

module.exports = recipeModel