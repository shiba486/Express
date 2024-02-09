const app = require('./app');
const port = 8080;

app.listen(port,()=>{
    console.log(`app is running successfully at http://localhost:${port}`);
})