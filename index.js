class Cat {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name, sex) {
        this.name = name
        this.sex = sex
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name,sex) {
        this.name = name
        this.sex = sex
    }
    speak(){
        if(this.sex === "male"){
        this.name = "Pablo"
        return `It's me! ${this.name}, the parrot!`
        }
        this.name = "Mable"
        return `${this.name} says squawk!`
    }
}