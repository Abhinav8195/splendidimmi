const abhinav = require("mongoose")

const userdata = abhinav.Schema({
    name:{
        type:String
       
    },
    email:{
        type:String
       
    },
    subject:{
        type:String
       
    },
    message:{
        type:String
       
    }
})
const abhinavb =abhinav.model("abhinavb",userdata)
module.exports={
    abhinavb
}