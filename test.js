// regular function

function fn1(){
  console.log("in the function f1")
}

fn1();

// expression function 
const function_call = function fn2(){
  console.log("in the function f2")
}

function_call();


(
  function fn3(){
    console.log("in the function f3");
  }
)();