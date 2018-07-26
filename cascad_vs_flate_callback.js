const delay=2000;

setTimeout(()=> {
  console.log('Level 1 reached...');
  setTimeout(()=>{
    console.log('Level 2 reached...');
    setTimeout(()=>{
      console.log('Level 3 reached...');
    }, delay);
  }, delay);
}, delay);

lev1(lev2);

function lev1(callback){
  setTimeout(()=>{
    console.log('Level 1 reached from func...');
    callback(lev3);
  },delay);
}

function lev2(callback){
  setTimeout(()=>{
    console.log('Level 2 reached from func...');
    callback();
  }, delay);
}

function lev3(){
  setTimeout(()=>{
    console.log('Level 3 reached from func...');
  }, delay);
}
