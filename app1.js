



const a =+prompt("enter first:");
const o =prompt("enter operator:");
const b =+prompt("enter second:");
switch(o){
       
       case"+":
                let c = a + b;
                document.write(a + "+" + b + "=" + c  );
        break;
         
        case"-":
             let c1 = a - b;
             document.write(a + "-" + b + "=" + c1  );
            break ;  
        case"*":
                 let c2 = a * b;
                 document.write(a + "*" + b + "=" + c2  );    
            break;   
        case"/":
                let c3 = a / b;
                document.write(a + "/" + b + "=" + c3 );
        break;     
        default:
                console.log("bed express");
                       

}