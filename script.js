class Person{
   constructor(name,age,gender,maritalstatus,contact,mail){
        this.name=name;
        this.age = age;
        this.gender=gender;
        this.maritalstatus=maritalstatus;
        this.contact=contact;
        this.mail=mail;
 }
}
const obj=new Person("linda","35","female","married","9600304509","lindapearlp1989@gmail.com");
console.log(obj.name,obj.age,obj.gender,obj.maritalstatus,obj.contact,obj.mail);



//2. class car
class Car{
    constructor(brand,colour,model,types,price,section){
        this.brand=brand;
        this.colour=colour;
        this.model=model;
        this.types=types;
        this.price=price;
        this.section=section;
    } 
}
    const obj =new Car("BMW","BLACK","BXM","i7","2.50cr")
    console.log(obj.brand,obj.colour,obj.model,obj.types,obj.price);



  //3.  class Movie
  class Movie{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
        const obj=new Movie("master","XB flim",8.9)
        console.log(obj.title,obj.studio,obj.rating);
    }
  }




  //4 class movie
  class Movie{
    constructor(tittle,studio,rating){
        this.tittle=tittle;
        this.studio=studio;
        this.rating=rating;
        const obj=new Movie("Casiono royale","Eon Productions","PG3")
        console.log(obj.title,obj.studio,obj.rating);
    }
}

//class Circle

class Circle{
    constuctor(radius,color){
        this.radius=radius;
        this.colour=color;
}
    get radius(){
        return this.radius
    }
    set radius(n){
        this.radius=n;
}
    get color(){
    return this.color;
 }
   set color(c){
    this,color=c
   }
   get tostring(){
    }
    return '"circle[radius=${this.radius},color=${this.color}]"'
    get area()
    return Math.PI* Math.pow(this.radius,2)
}
    get circumference(){
    return 2*Math.PI*this.radius
}
let obj=new Circle(1.0,"red")
console.log(obj.colours);
console.obj(obj.tostring);
console.log(obj.area);
console.log(obj.circumferance);
}



