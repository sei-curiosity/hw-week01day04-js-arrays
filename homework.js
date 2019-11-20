/// Q1:

let sum=0;

const summation = function (num){

for(i=0;i<=num;i++){

	 sum+=i;
}

return sum

}

 summation(5)


///Q2:

let sumz=0;

const summationEven = function (num2){

for(i=0;i<=num2;i++){



	if(i%2===0){

sumz+=i


	}


}

return sumz

}
summationEven(5)


/// Q3:

let arr = []
let sumx=0
arr = prompt ("Enter the elements")

const avg = function (ar){

let l = ar.length

for(i=0;i<l;i++){

	 sumx+=ar[i];
}

let avrg = sumx/l


return avrg


}

avg(arr);



/// Q4:

let reversed;

const reverse = function(rev){

  reversed=rev.split('');
  reversed=reversed.reverse();
  reversed=reversed.join("");
  console.log(reversed);

}
reverse("caterpillar");

/////// Q5:

const addDashes = function(Dash){
   console.log(Dash.join("-"));
}
addDashes(['test1', 'test2', 'test3'])





/// Q10 :


// let largArray = [1,2,3,10,4,7,0];

const largestEvenNumber = function(nums){

let l=nums.length;
let largestNo=0


for (i=0; i<l; i++){

  
  if (nums[i]%2===0 && nums[i]>largestNo) {


	largestNo=nums[i];

  }


}
return largestNo


}


largestEvenNumber([1,2,3,10,4,7,0])


























