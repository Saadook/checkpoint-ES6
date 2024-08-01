var name = "john"
var age = 25
var message='Hello, my name is ${name} and i am ${age} years old '
console.log(message);



function CalculateRectangleArea(length, width){
    var area=length*width
    return area
}


var personInfo=(person)=>{
    var{name,age,city}=person
    return '${name}is ${age} years old and lives in ${city}';
}
//var items =['apples','bananas','oranges']
//var list = 
//${items[0]}
//${items[1]}
//${items[2]}
//console.log(list);



var numbers=[1,2,3,4,5]
var doublenumbers=numbers.map(num=>num*2)
console.log(doublenumbers);


var people = [
    {firstName: 'John',lastName:'Doe'}
    {firstName: 'Jane',lastName:'Smith'}
    {firstName: 'Tom',lastName:'Brown'}
]
var fullname= people.map(person=>${person.firstName} ${person.lastName})
console.log(fullname);


var numbers =[1,2,3,4,5,6,7,8,9,10];
var evenNumbers=numbers.filter(num=>num%2===0)
console.log(evenNumbers);


var people=[
    {name:'Alice',age: 25}
    {name:'Bob',age: 35}
    {name:'Charlie',age: 40}
]
var olderthan30=people.filter(person=>person age>30)


var numbers =[5,10,15,20,25,30]
var squaredNumbers= numbers.map(num =>num * num)
var filtredNumber = squaredNumbers.filter(num =>num >20)
console.log(filtredNumber);

