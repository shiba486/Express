const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

//  app.use((req,res,next)=>{
//     console.log("middleware working");
//     next();
//  })
//this is route
app.get("/", (req, res) => {
  res.render("index", { name: "shiba" });
  res.end();
    // throw Error("i don't know")
});
app.get("/about", (req, res) => {
    res.render("about");
    res.end();
});
app.get("/error", (req, res,next) => {
   throw Error("something went wrong!")
    
  });

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
      res.status(404);
      res.render("error", { error: err });
 
}

app.listen(3000);
