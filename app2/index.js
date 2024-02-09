const app = require("./app")
const PORT = 3000;

app.listen (PORT, () => {
    console.log(`server is running successfully at http://localhost:${PORT}`);
})