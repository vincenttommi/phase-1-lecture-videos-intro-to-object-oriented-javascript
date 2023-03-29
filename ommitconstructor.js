class animal{


    sleep(){

        console.log('zzzzz')
    }
}


const  spot = new animal();

spot.sleep();


//If you don't need to do any special initialization, you can omit the constructor, 
//and a default constructor will be generated for you: