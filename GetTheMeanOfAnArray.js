marks = [4,4,4,4,4,4,4]

let suma = 0
let promedio = 0

function arreglo(marks){
    for (let index  = 0;index < marks.length ; index++) {
            suma += marks[index];
            promedio = suma/marks.length;
        }
        console.log(promedio);
    }

arreglo(marks)
