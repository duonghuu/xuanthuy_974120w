function isEmpty(str,text){
		if(str != "") return false;
		if(typeof(text) != 'undefined')	alert(text);
		return true;
}
function isPhone(str,text){
	if((str.length==11 && (str.substr(0,2)==01)) || (str.length==10 && (str.substr(0,2)==09)))
		return false;
	if(typeof(text)!='undefined') alert(text);
	return true;
}
function isEmail(str, text){
	emailRegExp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.([a-z]){2,4})$/;
	if(emailRegExp.test(str)){
		return false;
	}
	if(typeof(text)!='undefined') alert(text);
	return true;
}
function isSpace(str,text){
	for(var i=0; i < str.length; i++)
	{
		if((str.charAt(i)) == " ")
		{
			if(typeof(text)!='undefined') alert(text);
			return true;

		}
	}
	return false;
}
function isCharacters(str,text){
	if(str=='') return false;
	var searchReg = /^[a-zA-Z0-9-]+$/;
	if(searchReg.test(str)) {
		return false;
	}
	if(typeof(text)!='undefined') alert(text);
	return true;
}
function isRepassword(str,str2,text){
	if(str2=='') return false;
	if(str==str2) return false;
	if(typeof(text)!='undefined') alert(text);
	return true;
}
function isCharacterlimit(str,text,intmin,intmax){
	if(str=='') return false;
	intmin = parseInt(intmin);
	intmax = parseInt(intmax);

	if(str.length>=intmin && str.length<=intmax)
	{
		return false;
	}
	if(typeof(text)!='undefined') alert(text);
	return true;
}

