function triangle(){
var sides = []

sides.push(parseInt(prompt("enter first side")));
sides.push(parseInt(prompt("enter second side")));
sides.push(parseInt(prompt("enter third side")));

var first = sides[0];
var second = sides[1];
var third = sides[2];

/* console.log(sides); */
if (first===second  &&  second===third && first===third){
result.innerHTML=(" It is an Equilateral Triangle")
}

else if (first===second  &&  first!==third || first===third  &&  first!==second || second===third  &&  second!==first){
result.innerHTML=("It is an Isosceles Triangle")
}
else if(first>= (second+third) || second>=(first+third) || third>=(first+second) ){
 result.innerHTML =("Not a triangle")
}
// to check for nscalene

else if(first!==second && second!==third && first!==third){
result.innerHTML=("It is a Scalene Triangle")
}
else {
alert("NOT a triangle")
}
}
