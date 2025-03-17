function parseCount(num){
    let x = Number.parseFloat(num)
    if(Number.isNaN(x)){
        throw new Error("Невалидное значение")
    } else{
        return x
    }
    
}

function validateCount(num){
    try {
        return parseCount(num)
    } catch (error) {
        return error 
    }
}



class Triangle{
    constructor(a, b, c){
        if(a + b < c || a + c < b || c + b < a ){
            throw new Error("Треугольник с такими сторонами не существует")
        } else{
        this.a = a;
        this.b = b;
        this.c = c;
        }
    }

    get perimeter(){
        return this.a + this.b + this.c
    }
    get area(){
        let p = (1/2) * (this.a + this.b + this.c)
        let s = Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c))
        return  Number(s.toFixed(3))
    }
    
}


function getTriangle(a, b, c){
    try {
        let t = new Triangle(a, b, c)
        return t
    } catch (error) {
        let e = {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            }
        
        }
        return e
    }
}