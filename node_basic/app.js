const express=require("express");

function sum(a,b) {
	return a+b;
}

const total = sum(200,10);

const app= express();

app.get('/',(req,res) => {

	res.send("Hi from node");

});

app.listen(3000);

console.log("Total: ", total);