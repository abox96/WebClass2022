
let myarray = new Array(30);
myarray.splice(0, myarray.length);


for(i=0; i <= 30; i++){
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