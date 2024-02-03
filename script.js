function firstChar(text) {
  // your code here
	// let res='';
	let str=text.trim();
	if(!str || str.length===0) return '';
	return str[0];
	// for(let char of text){
	// 	if(char!=' '){
	// 		res=char;
	// 		break;
	// 	}
	// }
	// return (res);
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
