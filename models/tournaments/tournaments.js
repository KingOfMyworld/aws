const mongoose=require('mongoose');


const TournamentsSchema=new mongoose.Schema({
    id:{
        type:Number
    },
    time:{
        type: String
    },
    game:{
        type:Number
    },
    entry_fee:{
        type:Number
    },
    per_kill:{
        type:String
    },
    map:{
        type:String
    },
    total:{
        type:Number
    },
    mode:{
        type:String
    },
    players:[
        {
            registered_id:{
                type:Number
            },
            name:{
                type:String
            }
        }
    ],
    password:{
        type:Number
    },
    date:{
        type:Date,
        default:Date.now()
    },
    over:{
        type: Boolean,
        default: false
    },
    image:{
        type:String
    }
})

module.exports =mongoose.model("Tournaments",TournamentsSchema)


