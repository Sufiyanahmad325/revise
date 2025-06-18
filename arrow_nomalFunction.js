function add(x, y) {
    console.log(arguments)
    return x + y;
}

// add(10, 15)


const addOne = (x, y) => {
    console.log(arguments) // it will not run in browser console and show error
    return x + y
}

// addOne()




function car(name) {
    this.brand = name
}

let carData = new car('scorpio')

// console.log(carData)



const carTwo = (name)=>{
    // this.brand = name
    // console.log(name)
}

// let a = new carTwo("van")
// console.log(a)





let userInfo = {
    name:'sufi',
    fullName:function(){
        console.log(this.name + ' is my name')
    }
}


// userInfo.fullName()



let userInfo2 = {
    name:'sufiyan',
    fullName:()=>{
        console.log(this.name + " is my name")
    }
}

// userInfo2.fullName();



let shop = {
    item: "Laptop",
    showItem: () => {
      console.log("We have " + this.item);
    }
  };
//   shop.showItem();
  



  function outer (name){
    this.name = name
    const inner =()=>{
        console.log(this.name)
    }

    inner()
  }

//   outer('Apple')








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const obj = {
    name:"suneja",
    greet:function(){
        return `Hello  ${this.name}`  // 'this' will refer to obj mean it allow to access object data 
    }
  }

//   console.log(obj.greet())         // it will print Hello  suneja


  const objOne = {
    name:"suneja",
    greet:function(){
        return `Hello , ${this.name}`  // 'this' will refer to obj mean it allow to access object data 
    }
  }


  let a = objOne.greet  // here i have taken out green function from objOne and create a standalone function
  console.log(a())      // here i am runnig the code but i will print => 'Hello undifined '  becouse now greet fuction does not part of objOne 
  // if i you have to print 'Hello suneja' so you will be bind objOne with greet function becouse it is a saparate function
  let b = objOne.greet.bind(objOne)
  console.log(b() + 'hahahhha')


  

















