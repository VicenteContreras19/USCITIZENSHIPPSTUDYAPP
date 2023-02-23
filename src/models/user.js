import { Schema, model } from "mongoose";

const userSchema = new Schema({

    progress:{
        totalProgress:{
            type: String,
            default:'0'
        },
        
        americanGovernment:{
            A:{
            type: String,   
            default:'0'
            },
            B:{
            type: String,
            default:'0'
            },
            C:{
            type: String,
            default:'0'
            },
        },

        americanHistory:{
            A:{
            type: String,
            default:'0'
            },
            B:{
            type: String,
            default:'0'
            },
            C:{
            type: String,
            default:'0'
            },
        },

        symbolsAndHolidays:{
            A:{
            type: String,
            default:'0'
            },
            B:{
            type: String,
            default:'0'
            },
        },
    },
 
    email:{
        type: String,
        unique:true, 
    }, 
    password: {
        type: String,
      }
    
})

export default model("user", userSchema);