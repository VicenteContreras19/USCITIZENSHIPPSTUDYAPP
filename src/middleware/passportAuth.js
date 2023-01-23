const passportAuth = (req,res,next)=>{
    if(!req.isAuthenticated()){
       return res.redirect('/signIn')
    }
    next()
}

export default passportAuth