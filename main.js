//Задача-1

let vegetableson = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function arrayClone(arr) {
    let result=[]
    arr.forEach(n=>result.push(n))
    return result
}
let arr1 = arrayClone(vegetableson);
console.log(arr1)
// Задача-2
let vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
function reverseArrayString(array){
    return array.join(', ')
}
console.log(reverseArrayString(vegetables))
//Задача-3

function formatDate(date){
    let dateReverse = date.split("-")
    let result = dateReverse.reverse();
    return result.join("/")
}

console.log(formatDate("2025-12-31")); 
console.log(formatDate("2022-06-15")); 
//Задача-4
let num = 57830;
function colonOdd(num) {
  let result = num.toString().split('').map((element) => {
    if (element % 2 !== 0) {
      return element + ':';
    }
    return element;
  });
  return result.join('');
}

console.log(colonOdd(num));
//Задача-5
const str ="КаЖдЫй ОхОтНиК";
function changeRegister(str) {
    let result = str.split('');
    let resultMap = result.map((element, index) => {
      if (element === " ") {
        return element;
      } else if (element === element.toUpperCase()) {
        return element.toLowerCase();
      } else {
        return element.toUpperCase();
      }
    });
    return resultMap.join('');
  }
  
  console.log(changeRegister(str)); 