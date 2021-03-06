//Bubble Sort Algorithm

function bubbleSort(arr){
    for(var i=0; i<arr.length; i++)
    {
        for(var j=0; j<arr.length; j++){
           console.log(arr, arr[j],arr[j+1]);
            if(arr[j]> arr[j+1]){
                //Swap!!
                var temp= arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
   return arr;
}

bubbleSort([12,34,45,2,3,54,45,6,7,87])

  //Best case for time complexity is O(n)
  //Average Time Complexity is O(n^2)
  //Worst Time Complexity is O(n^2)
  //Space complexity is O(1)