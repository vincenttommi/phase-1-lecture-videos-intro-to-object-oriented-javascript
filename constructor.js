class person{


    name;    //property


    //creates a new object
    constructor(name){

        //a constructor that takes a name parameter that is used to
        // initialize the new object's name property
     this.name = name;



    }



    //method used to refer to objects properties
    introduceSelf(){
        console.log(`Hi i'm this ${this.name}`);
    }
}