const obj1 ={name:"person1", age:5, };
const key1 = Object.keys(obj1);
console.log(key1);
console.log(JSON.stringify(key1));
const obj2 ={ age:5,name:"person1" };
const key2 =Object.keys(obj2);
console.log(key2);
console.log(JSON.stringify(key2));
if (JSON.stringify(key1) === JSON.stringify(key2))
{
    console.log("equal")
}
else
{
    console.log("not equal!")
}