import validator from "validator";
import User from "../models/user.js";
import bcrypt from "bcrypt"



const authControllers ={

    register:(req,res)=>{
        const errors = []

        const {email,password, confirmpassword} = req.body; 



        if(!email||!password||!confirmpassword)
            errors.push({err:"Invalid form"});
            if(password != confirmpassword)
                errors.push({err:"Passwords do not match"}); 

            if(!validator.isEmail(email))
                 errors.push({err:"Invalid email"});

            

    User.findOne({email}).then((user) => {
        if(user){
            errors.push({err:"Email already registered"});
        }
        if(errors.length){
            req.flash('error',errors)
            console.log(errors)
            return res.redirect('/register')
            
        }


        //hash and salt on that thang
        bcrypt
            .genSalt()
            .then((salt)=>{
                bcrypt
                .hash(password,salt)
                .then((hash)=>{
                   

                    console.log(email, password, hash)
        // all good? you can create that user here
         User.create({email, 
                    password: hash
                })
                    .then((user)=> {
                        console.log(user);
                        req.flash("Success!", "Please sign in.");
                        res.redirect('/signIn');
                        

                    })
                    .catch((err)=>res.status(500)
                    .json({err:err.message}))
                   
                })
                .catch((err)=>res.status(500)
                .json({err:err.message})) 
               
            })
            .catch((err)=>res.status(500)
                .json({err:err.message}))
                
    });
   
    },

    
    }




export default authControllers