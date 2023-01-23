import bcrypt from 'bcrypt'
import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import User from '../models/user.js'
import { config } from 'dotenv'


config ({path: 'src/config/.env'})

passport.serializeUser((user,done)=>{
    done(null, user.id)
})

passport.deserializeUser((id, done)=> {
    User.findById(id).then(user =>{
        if(!user)return done(null, false)

         done(null,user)

    }).catch(err=>done(err,false))
})


passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done)=>{
    console.log(email);

    if(!email ||!password ) done(new Error('Please fill out a valid form'), false,)

    User.findOne({email}).then(user=>{
        if(!user) return done(new Error('No user exists with that email'), false, )

        bcrypt.compare(password, user.password).then(isMatch=>{
            if(!isMatch) return done(new Error('Invalid credentials'), user)
            done(null, user, {message: 'Thank you for signing in'})
            console.log(`Welcome, ${user.email}!`)
        }).catch((err)=> done(err,false))
    }).catch((err)=> done(err,false))
}))



