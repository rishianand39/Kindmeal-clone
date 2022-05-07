const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require("passport")


const GOOGLE_CLIENT_ID="768616634064-lna5tq1396cdqoc75do6snpcemtjmbmp.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"



passport.use(
    new GoogleStrategy(
    {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
   },
  function(accessToken, refreshToken, profile, cb) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(null, user);
    // });
    console.log(accessToken, refreshToken,profile)
  }
));
module.exports=passport