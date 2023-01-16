// Write a program to print all the prime number between 0 to 100 (0 and 100 included).


let primeNo = " ";
let count=0
let i,j 
for(j=2;j<=100;j++)
{
   for( i=1;i<=j;i++)
   {
    if(j%i==0)
      count++
   
   }

   if(count==2)
   // console.log(j);
   primeNo += j+" "; 
   count=0

}
console.log(primeNo);