exports.userInfo = (req,res)=>{
    // res.end('This is user info')    //text-data
    // res.status(200).json({
    //     "name":"shibanondo",
    //     "panel": "user",                        //json-data
    //     "message": "HELLO EVERYONE",
    //     "statusCode" : 201
    // })
   
    res.status(401)
    res.end("unauthorize");     //statusCode
    // res.sendFile(__dirname + "/view/user.html");        //html-data
}