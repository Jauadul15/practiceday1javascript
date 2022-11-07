function jug(a,b,...numbers){ //rest parameter ...number 
    let sum=0;  
    for(let i of numbers){
        sum=sum+i;
    }
    console.log(sum);

}
jug(123,124,14234,5135,524)

