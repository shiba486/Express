const app = require('./app');
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('hello everyone');
})