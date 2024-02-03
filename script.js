function firstChar(text) {
  // your code here
	let res=' ';
	for(let char of text){
		if(char!=' '){
			res=char;
			break;
		}
	}
	return stringify(res);
}

// Do not change the code below
const text = prompt("Enter text:");
alert(firstChar(text));
