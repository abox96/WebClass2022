const quickSort = function (arr) {
    console.count('함수 실행 ');
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) left.push(arr[i]);
      else right.push(arr[i]);
      
    }
  
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
   
  };

  let myarray = new Array(30);
myarray.splice(0, myarray.length);


for(i=0; i <= 30; i++){
   a = Math.floor(Math.random() * 100);
   myarray[i] = a;
}
console.log(myarray);
console.log(quickSort(myarray));
