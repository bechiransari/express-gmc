const time =(req,res,next)=>{
    var today= new Date();
    var wa9t= today.getHours();
    var day=birthday.getDay()
    if (wa9t>= 8 && wa9t <= 17 && day >=1 && day<=5 ){
        next();
    }
    else
    {res.sendFile(__dirname + "/error.html");}
};
module.exports=time