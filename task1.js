var str =process.argv[2];
var nstr="";
for(var i=0; i<str.length; i++){
	if(str[i]=="к"||str[i]=="р"||str[i]=="н"||str[i]=="К"||str[i]=="Р"||str[i]=="Н"){
		}else{
			nstr=nstr+str[i];
		}
}
process.stdout.write(nstr);
