let x= prompt("Enter array length : ")
let arr= []; //new Array();
for(let i=0;i<x;i++){
    arr[i]=prompt()
}

let start=arr[0];//initial position of the plane with arr[0] fuel
let hire=1;         //taking a plane at begining of the array 
for(let i=1;i<x;i++){
    if(start>0){
        /* for every value of if the initial plane has fuel it will skips to hire the plane in that index
         and for each station one unit fuel will be consumed */
        start--;
        continue;
    }
    else if(start==0 && arr[i]>0){
        /* if plane runs out of hire take the plane with fuel */
        start=arr[i];
        hire++;
    } 
    else if( start ==0 && arr[i]==0){
          /*if plane fuel level turn 0 and
           there isn't a plan with fuel decrease the index value of array to take alternative plane */
        i-=1;
    }
        
    }
    
console.log(hire); 


//Time complexity : O(N)
 