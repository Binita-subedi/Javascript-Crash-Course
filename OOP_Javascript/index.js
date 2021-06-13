
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWages( baseSalary, overtime, rate ) {
  return baseSalary + ( overtime * rate );
}

// //encapsulation
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,

  getWages: function () {
    return this.baseSalary + ( this.overtime * this.rate );
  }
};
employee.getWages();

//using object literals
const circle = { //here {} is object literal syntax...object in    javascripte is essential key value pairs
  radius: 1,
  location: {
    x: 1,
    y: 1
  },
  draw: function () {
    console.log( 'draw' );
  }
};
//here circle is object..using the key value property of object by method

circle.draw();



////FACTORY FUNCTION


function createCircle( radius ) {
  return {
    radius,
    draw: function () {
      console.log( 'draw' );
    }
  };
}

const circle = createCircle( 1 );
circle.draw();






////Constructor Function

function Circle( radius ) {
  this.radius = radius; //this keyword is used to set the  various property of the object.
  this.draw = function () {
    console.log( 'draw' );
  }
}



const another = new Circle( 1 );



//// value Types (premitive)     Reference Types
//  Number                //  Object
//  String                //  Function
//  Boolean               //  Array
//  Symbol
//  null
//  undefined
//// Primitive value, Primitive data type is data that is not an object and has no methods. These are & primitive data types: Strings, number, bigint, boolean, undefined, symbol, and null.

////Javascript has 3 data types that are passed by reference: Array, Function, and object. These are all technically Objects, so we'll refer to them collectively as object.

//// eg of primitive type 

let x = 10;
let y = x;

x = 20;

// eg of Reference type

let x = { value: 10 };
let y = x;

x.value = 20;

let number = 10;

function increase( number ) {
  number++
}

increase( number );

console.log( number ); ////this console 10 i.e only let number = 10 in execution which compile seperately

// when making objet 

let obj = { value: 10 };

function increase( obj1 ) {
  obj1.value++;
}

increase( obj );
console.log( obj );



//// Adding/Removing Properties

////Adding Properties

function Circle( radius ) {
  this.radius = radius;
  this.draw = function () {
    console.log( 'draw' );
  }
}

const circle = new Circle( 10 );
// adding new property location 
circle.location = { x: 1 };
// Accessing location properties using bracket noatation

circle['location'] = { x: 1 };

// // deleting property for client

// delete circle.location

// //using bracket notation 

// delete circle['location'];

//Enumerating Poperties

function Circle( radius ) {
  this.radius = radius;
  this.draw = function () {
    console.log( 'draw' );
  }
}

const circle = new Circle( 10 );

for ( let key in circle ) {   // gets all the keys in object
  if ( typeof circle[key] !== 'function' ) //typeof is a operator.. we use them to seperate property with method
    console.log( key, circle[key] ); //circle[key] also gives the value of proerty
}

const keys = Object.keys( circle ); //here keys() is method; for passing circle value we do keys( circle ), doing Object.keys(circle) we pass circle as object.....it's key value :- which is store in keys and is shown in console.
console.log( keys );

if ( 'radius' in circle )
  console.log( 'circle has a radius' );

////Abstraction : Its main goal is to handle complexity by hiding unnecessary details from the user.It hids the details and only show essential.

function Circle( radius ) {
  this.radius = radius;

  let defaultLocation = {
    x: 0,
    y: 0
  };

  let computerOptimumLocation = function ( factor ) {

  }

  this.draw = function () {
    computerOptimumLocation( 0.1 );
    console.log( 'draw' );

  };

}

const circle = new Circle( 10 );
circle.draw();

//Getter and setter

function Circle( radius ) {
  this.radius = radius;


  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log( 'draw' );
  };

  Object.defineProperty( this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function ( value ) {

      if ( !value.x || !value.y )
        throw new Error( 'Invalid location.' );
      defaultLocation = value;

    }
  } );
}


const circle = new Circle( 10 );

Circle.draw();




