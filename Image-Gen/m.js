let arr =[
    {product:"Milk",quatity:3,Price:1.50, },
    {product:"Burger",quatity:2,Price:2.50, },
  

]
let sum = 0;
for(let i = 0; i<arr.length; i++){
    sum+=arr[i].quatity*arr[i].Price;
}
console.log(sum);
    