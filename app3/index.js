const app = require('./app');
// var bodyParser = require('body-parser')
const port = 3001;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

// app.post('/user',(req,res)=>{
//     const name = req.body.name;
//     res.send(`welcome ${name}`)
// })

app.listen(port,()=>{
    console.log(`server is running successfully at http://localhost:${port}`);
})