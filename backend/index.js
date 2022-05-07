
const express=require("express")

const app=express();
const passport=require("./passport")


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });


// app.get("/",(req,res)=>{
//     res.send("Home Page")
// })

app.listen("5000",()=>{
    console.log("Listening on port 5000")
})