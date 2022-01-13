




//task 1
  const number1 = +prompt('Введите первое значение')
  const number2 = +prompt('Введите второе значение')

  function square(width=0, height=0 ) {
    return width * height;
  }
  let result = square(number1, number2)
console.log(result)


  //task 2


const radius = +prompt('Введите значение радиуса')
const PI =(3.14)

function length(Pi, R){
    return PI * (R*R)

}
const lenghtRadius = length(PI , radius)
console.log(lenghtRadius)

//Task 3

const number3 = +prompt('Введите  высоту цылиндра')
const number4 = +prompt('Введите диаметр основания')
const pi =(3.14)

function vs (dia, hei,pi){
    return ((pi*(dia*dia))*hei)/4
}
let V = vs(pi,number3,number4)

console.log(V)


///task 4

const dol = (27.65)
const number5 = +prompt('Введите суму')

function convert (dol, ua){
    return dol*ua

}
let many = convert(number5 , dol)
/console.log(many)

//task5



function fi (first,last){

for(let i =first; i <= last;i++)
    {if (i % 5== 0)console.log (i)
    }

}
const rest = fi(11,55)
console.log(rest)


//task6

function game (a){
    for (let i=1;i<101;i++){
        if (i%15==0)
        console.log('FizBuzz')
        else if(i%3==0)
        console.log('Fizz')
        else if (i%5==0)
        console.log('Buzz')   
        else console.log(i) }
}
const fzbz = game(15)
console.log(fzbz);