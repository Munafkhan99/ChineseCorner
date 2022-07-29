let uNode = document.getElementById("uname");
let pNode = document.getElementById("pass");

let enode1 = document.getElementById("error1");
let enode2 = document.getElementById("error2");

let array1 = [enode1, enode2];
for(let node of array1){
    node.style.color="red";
}

function validateForm(){
   let v1=validate1();
   let v2=validate2();

    return(v1 && v2);
}

function validate1(){
    let uname=uNode.value;
    enode1.innerHTML="";
    if(uname==='Lucky123'){
        
        uNode.style.border="2px solid green";
        return true;
    }


  
    else{
        
        enode1.innerHTML="<small>Incorrect username</small>";
        uNode.style.border="2px solid red";
        return false;
    }
}


function validate2(){
    let mypass=pNode.value;
    enode2.innerHTML="";
    if(mypass==='Lucky123'){
        
        pNode.style.border="2px solid green";
        return true;
    }

     else{
        
        enode2.innerHTML="<small>Incorrect password</small>";
        pNode.style.border="2px solid red";
        return false;
    }
}


function showPassword(){
    if(checkboxNode.checked){
       pNode.type="text";
    }else{
       pNode.type="password";
    }
   }

console.log("HII"); 
