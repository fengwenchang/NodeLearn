var express = require("express");
var app = express();
var sql = require("mssql");
var config = {
	user:"sa",
	password:"123",
	server:"localhost",
	database:"MyDatabase"
}

//app.get("/api/user",function(req,res){
	sql.connect(config).then(function(){
	new sql.Request().query('select * from testTable').then(function(record){
	 console.log(record);
	
	})
	})
//})
/*app.listen(8080,function(){
console.log("app listening on 8080")
})*/