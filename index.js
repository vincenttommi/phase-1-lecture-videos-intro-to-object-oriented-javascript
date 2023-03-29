class Cat {

//blue print fo an object

//to initialise a  an object we use a constructor

constructor(name, breed,type,age){

    //assiging values to objects
    this.name = name
    this.breed = breed
    this.type = type
    this.age = age

    console.log(this)
    

}
}

new Cat("rose","domestic","longair",9)
new Cat("puppy","local","shorthair",20)