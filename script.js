function firstChar(text) {
  // your code here
	let res=' ';
	for(let char of text){
		if(char!=res){
			res=char;
			break;
		}
	}
	return res;
}

// Do not change the code below

// const text = prompt("Enter text:");
// alert(firstChar(text));
