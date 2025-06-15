// class RailwayForm {
//     submit(){
//         console.log(this.name +" form submitted")
//     }

//     cancel(){
//         console.log( "this form is cancel")
//     }

//     fill(name , trainno){
//         this.name = name
//         this.trainno = trainno
//     }
// }


// let harry = new RailwayForm()
// let rohan  = new RailwayForm()


// harry.fill('sufi' , 11124)
// rohan.fill("cat" , 11123)

// harry.submit()
// rohan.submit()


// rohan.cancel()





/////////////////// Construnctor //////////////////////////////////




// class Animal {
//     constructor(name  , trainno){
//         this.name = name
//         this.trainno = trainno
//         console.log('Constructor Called')
//     }

//     submit(){
//         console.log(this.name +" form submitted")
//     }

//     cancel(){
//         console.log( this.name + " " + "Your form is cancel")
//     }

// }


// const harry = new Animal('sufiyan' , "11124")

// harry.submit()
// harry.cancel()








class RailwayForm2 {
    constructor(givename, trainno, address) {
        this.name = givename
        this.trainno = trainno
        this.address = address
    }


    preview() {
        console.log(this.name + " your orm is submitted for train number" + this.trainno + `and your address is ${this.address}`)
    }

    submit() {
        console.log(this.name + " Your from is submitted for train number " + this.trainno)

    }


    cancel() {
        console.log(this.name + ": this form is cancelled for train number " + this.trainno)
        this.trainno = 0
    }

}



// let harry2 = new RailwayForm2('sufi' , 11123 , "inderwa")


// harry2.preview()
// harry2.submit()
// harry2.cancel()



///////////////////////// inharitance ////////////////////////////////


class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
        this.salary = 26500
    }

    run() {
        console.log(this.name + " is runnig")
    }

    shout() {
        console.log(this.name + " is shouting")
    }
}



class Monkey extends Animal {
    eatBanana() {
        console.log("banana " + this.salary)
    }
}



// let ani = new Animal("bruno", "white")
// let m = new Monkey('chimpu', 'orange')

// m.shout()
// m.eatBanana()






////////////////////////////// Super with class methods ///////////////////////////////////


class Employee {
    login() {
        console.log(`Employee has logged in`)
    }

    logout() {
        console.log(`Emloyee has logged Out`)
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves`)
    }
}





class Programmer extends Employee {
    requestCoffee() {
        console.log(`Emloyee has requested ${x} coffees`)
    }

    requestLeaves(leaves) {
        super.requestLeaves(5)
        // console.log(`Employee has requested ${leaves+1} leaves (one Extra leave)`)
    }


}



// let e = new Programmer()


// e.login()
// e.requestLeaves(4)










/////////////////////////// super with constructor /////////////////////


class Employee2 {
    constructor(){
         console.log("Employee's constructor is here")
    }
    login() {
        console.log(`Employee has logged in`)
    }

    logout() {
        console.log(`Emloyee has logged Out`)
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto approved`)
    }
}





class Programmer2 extends Employee2 {

    constructor(){
        super()
        console.log("programmer2 constructor is here")
    }

    requestCoffee(x) {
        console.log(`Emloyee has requested ${x} coffees`)
    }

    requestLeaves(leaves) {
        super.requestLeaves(5)
        // console.log(`Employee has requested ${leaves+1} leaves (one Extra leave)`)
    }


}



// let a = new Programmer2()


// a.login()
// a.requestLeaves(4)
// a.requestCoffee(2)













/////////////////////////// Static method ////////////////////////


class MyAnimal{
    constructor(name){
        this.name = MyAnimal.capitalize(name)
    }


    walk(){
        console.log(`Animal `+ this.name + ` is walking`  )
    }


    static capitalize(name){    // this keyword is not working in statics method
      return   name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }


}


// const my = new MyAnimal('elephant')

// my.walk()
// let hello = MyAnimal.capitalize("apple")
// console.log(hello)










//////////////////////////getter and setter ////////////////////////////



class Apple {
    constructor(name){
        this.name = name
    }

    fly(){
        console.log("i am flying")
    }

    set name(newName){
            this._name = newName
    }

    get name(){
       return this._name
    }

}

let a = new Apple("Elephant")
console.log(a.name)          // here is used getter the value is 
a.name="sufiyan"            // this is setter 
console.log(a.name)         // this is getter 

a.fly()


