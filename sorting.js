var objArr = [
  {rank:7},
  {rank:3},
  {rank:9},
  {rank:111},
  {rank:1},
  {rank:18}
];

for(var i = 0, len = objArr.length; i < len; i++){
  console.log(objArr[i].rank);
}

objArr.sort(function(a,b){ return a.rank-b.rank});

console.log(objArr);

console.log('array of objects now sorted according to rank key');

for(var i = 0, len = objArr.length; i < len; i++){
  console.log(objArr[i].rank);
}
