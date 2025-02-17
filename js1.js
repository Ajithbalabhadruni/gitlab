function adddisplay(text){
    document.getElementById("display").value+=text
}
function calculate(){
    try {
        let val = document.getElementById('display').value;
        let result = new Function('return ' + val)(); // Secure way to evaluate expressions
        document.getElementById("display").style="background-color:green"
        setTimeout(()=>{
            document.getElementById("display").style="background-color:white"
        },1000)
       
        document.getElementById('display').value = result;
        

    } catch (error) {
        // alert("Invalid expression");
        cleardis();
        document.getElementById("display").style="background-color:red"
        setTimeout(()=>{
            document.getElementById("display").style="background-color:white"
        },1000)

    }

}
function cleardis(){
    document.getElementById("display").value=''
    document.getElementById("display").style="background-color:white"
}
