var test = [1,3,4];
test2 = {}
console.log(Array.isArray(test));
console.log(Array.isArray(test2));
console.log(test.slice());
test3 = [2,5,[3,6]];
console.log(test3.slice());

var first = function(array,n)
{
  if(array == null)
    return 0;
  console.log("jhjjh");
  if(n == null)
    return array[0];
  console.log("mbvgg");

  if( n<0)
    return[];

  return array.slice(0,n);

}
console.log(first([3,4,5],2));
console.log(first([34,5],-2));
 var mycolor  = ["red","pink","blue"];
 console.log(toString(mycolor));
 console.log(mycolor.join(","));













