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

let myarray = new Array(150);
myarray.splice(0, myarray.length);

for(i=0; i <= 150; i++){
   a = Math.floor(Math.random() * 100);
   myarray[i] = a;
}
console.log(myarray);
console.log(quickSort(myarray));
/*퀵 정렬은 기준이 되는 요소 하나를 정하고 왼쪽에 기준요소보다 작은 값의 배열을 큰 값은 오른쪽에 놓는다.
이렇게 분할해 놓은 하위 배열에 대해 재귀적으로 퀵 정렬을 호출한다.
이러한 퀵 정렬은 별도의 메모리 공간을 할당해줘야 하기에 데이터 양이 많으면 공간 낭비가 심해진다.
퀵 정렬의 시간 복잡도는 최악의 경우  O(n^2)와 최상의 경우 O(nlog₂n)를 가진다.*/
