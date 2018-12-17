var n=25;
function extraLongFactorials(n) {
var result=n;
    for(var i=n-1;i>0;i--){
        result=result*i;
        
    }
result=result.toString();
var x=result.split("e+");
//console.log(typeof(result));    
//console.log(Number(result).toPrecision(Number(x[1])));
var z=x[0].replace(".","");
for(var j=0;j<9;j++){
    z=z.concat("0");
}
console.log(x[0].replace(".",""));
console.log(z);    
}

extraLongFactorials(n);