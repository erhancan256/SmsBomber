var express=require("express")
var app=express()
var Arr=require("./var.js")
var Sms=require("./Sms.js")
const PORT = 5000;
app.listen(PORT ||process.ENV.PORT,(listen)=>{
	console.log("App is working on "+PORT+"\nhttp://localhost:"+PORT)

});
var request=require("request")



app.get("/",(req,res)=>{
	res.end("1")
})

app.get("/sms/api/v1",(req,res)=>{
	res.end("working")
	const phone=req.query.phone;
	Sms(phone,"true")
})








