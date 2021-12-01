function add(n1: number, n2: number): number {
    return n1 + n2;
  }
  
  function printResult(num: number): void {
    console.log("Result: " + num);
  }
  
  function addAndHandle(n1: number, n2: number, callback: (num: number) => void){
    const result = n1 + n2;
    callback(result);
  }
  
  addAndHandle(10, 22, (result) => {
    console.log(result)
  });
  
  let addTwoValue: (a: number, b: number) => number;
  addTwoValue = add;
  
  console.log(addTwoValue(1, 2));
  
  printResult(add(1, 2));
  