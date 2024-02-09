const app = require('./app')
const port = 3004;
app.listen(port,(req,res)=>{
    console.log(`server is running successfully at http://localhost:${port}`);
})