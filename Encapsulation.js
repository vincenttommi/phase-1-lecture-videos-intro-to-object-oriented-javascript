class student  extends person{

#year;


constructor(name, year){

    super(name);
    this.#year = year;
}


introduceSelf(){


    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
}

canStudyArchery(){

  return this.#year > 1;

     
}

}


//In this class declaration, #year is a private data property. 
//We can construct a Student object, and it can use #year internally, but if code outside the object tries to access
// #year the browser throws an error:

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery();