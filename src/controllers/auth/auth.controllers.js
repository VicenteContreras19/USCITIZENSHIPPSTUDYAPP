import passport from "passport";


const controller = {
    login: (req, res, next) => {
passport.authenticate("local", (err, user, info) => {
    if (err) {
      req.flash('error', err.message)
      return res.redirect('/signIn') // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      req.flash("error", "No User Exists With that Email");
      return res.redirect("/signIn");
    }
    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      req.flash('success', 'Welcome!')
      return res.redirect("/app/dashboard");
    });
  })(req, res, next);
    }
   
    
}


export default controller