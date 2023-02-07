function pow(x,n){
    let number=x
    let number2=x
    for(let i=0; i<n; i++){
      console.log(number2)
      
     number2*=number
    }
    return number2/x
    
  }


  let number=Number(prompt("Enter a number",7))
  if(number){
    let times=Number(prompt("Enter the power"))
    if(times){
        alert(pow(number,times))
    }
  }
