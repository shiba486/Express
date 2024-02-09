const app = require('./app')
const port = 3001;


app.listen(port, ()=>{
    console.log(`the server is running successfully at http://localhost:${port}`);
})