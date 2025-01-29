import app from "./app.js";

app.listen(3000, ()=>{
    console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
})