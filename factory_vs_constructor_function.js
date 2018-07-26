function factoryF() {
  
  // the first method...
  // returning an object, that s the Factory function

  let po = 12;
  
  return {
    pi : 19,
    fi : function() {console.log('fact_f: this.pi: ' + this.pi);},
    fo : function() {console.log('fact_f: po: ' + po);} //closure!
  };
}

let fact_f = factoryF();
fact_f.fi();
fact_f.fo();


function ConstructorF(){
  
  // the second method...
  // calling the new op, that s the constructor function
  
  this.p = 17;
  this.f = function() {console.log('const_f: this.p : ' + this.p);};
}

let cons_f = new ConstructorF();
cons_f.f();
