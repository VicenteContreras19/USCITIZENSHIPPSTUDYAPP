import { Schema, model } from "mongoose";

const userSchema = new Schema({
  progress:{
    
  },

    email:{
        type: String,
        unique:true, 
    }, 
    password: {
        type: String,
      },
      googleID: {
        type: String,
        
      },

      displayName: {
        type: String
      },
    
      profilePic: {
        picturePath:{
          type: String,
          default: ''
        }, 
        cloudinaryID:{
          type: String,
          default: ''
        }
      }
    
})

export default model("user", userSchema);