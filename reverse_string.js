function reverseString(string){
  var theString = string.split('');
  for(var i = 1;i<=(theString.length)/2; i++){
    var firstChar = theString[i-1];
    var temp = firstChar;
    theString[i-1] = theString[(theString.length)-i];
    theString[(theString.length)-i] = temp;
  }
  return theString.join('');
}

console.log(reverseString("supercalifragilisticexpialidocious"));
