let myarray = new Array(150);
myarray.splice(0, myarray.length);

for(i=0; i <= 150; i++){
   a = Math.floor(Math.random() * 100);
   myarray[i] = a;
}

function insertionSort (array) {
      for (let i = 1; i < array.length; i++) {
            let cur = array[i];
            let left = i - 1;    
            
            while (left >= 0 && array[left] > cur) {
                  array[left + 1] = array[left];     
                  left--;
            }   
            array[left + 1] = cur;    
            console.log(`${i}번째 정렬: ${array}`);  
        }  
        
        return array;
    }
    console.log(insertionSort(myarray));

/*삽입정렬은 항상 두 번째 요소를 왼쪽 요소와 비교하면서 시작한다.
이렇게 두 요소를 비교하는 것을 배열의 끝까지 반복하여 1회차 탐색이 끝나며,
모든 요소가 정렬될 때까지 회차를 반복하게 된다.
그렇기 때문에 Big O는 정렬이 하나도 안되어 있는 최악일 경우 O(n^2)
이미 정렬되어 있는 최고의 경우 O(n)의 시간 복잡도를 가지게 된다.
삽입정렬의 장점 중 하나는 정렬과정 중 또다른 메모리를 할당할 필요없이 기존의 메모리안에서 정렬이 가능하기에 메모리가 절약된다는 점이다.
반면에 자료의 개수가 많아질수록 탐색해야 하는 데이터가 많기에 성능이 매우 떨어지게 된다.*/
