exports.adminInfo=(req,res)=>{
    // res.end('<h1>This is admin info</h1>')
   /* res.status(200).json({
        "name":"admin",
        "panel": "admin",
        "message": "HELLO EVERYONE",
        "statusCode" : 200
    })
    */
    res.statusCode = 201;
    res.sendFile(__dirname + "/view/admin.html")
}