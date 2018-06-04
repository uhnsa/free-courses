var a=Number(process.argv[2]);
var b=Number(process.argv[3]);
while (a!=0 && b!=0){
	if(a>b){
		a=a%b;
	}else{
		b=b%a;
	}
}
var s=a+b;
s=Math.abs(s);
console.log(s);
