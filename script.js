/**This is my solution  */
/*function pow(x,n){
    let number=x
    let number2=x
    for(let i=0; i<n; i++){
      console.log(number2)
      
     number2*=number
    }
    return number2/x
    
  }*/
  /*function showErrorMessage(){
    alert("Please Enter Only Numbers From 0.")
  }

  function pow(x,n){
    let number_1=x
    let number_2=x
    while(n>1){
      result*=x
      n--
    }
    
  
    return (n==0)? 1 : number_1
  }
  function validateInput(num){
    if(typeof num==="number" && num>=0){
      return true
    }else{
      return false
    }
    
  }


  let number=Number(prompt("Enter a number",7))
  if(number){
    let times=Number(prompt("Enter the power"))
    if(validateInput(times)){
        alert(pow(number,times))
    }else{
      showErrorMessage()
      
    }
    
  }else{
    showErrorMessage()
  }*/
/**This is the real solution from javascript.info */

function pow(x,n){
  let result=x
  for(let i=1; i<n; i++){
    result*=x
  }
  return result
}

let number=Number(prompt("number?",3))

if (number){
  let power=Number(prompt("power?",2))
  if(power && power>=0){
    alert(pow(number,power))
  }else{
    alert("Enter Numbers Only Equal or greater then 0.")

  }
  
}else{
  alert("Enter Numbers Only")
}