import {Component}from "react";
import"./login.css";
class Sharon extends Component{
    render(){
        return(
            function ValidateForm(){
                    var nameInput=document.getElementById("Sharon_Nikitha");
                    var passwordInput=document.getElementById("password");
            
                var Sharon_Nikitha=nameInput.value;
                if(!/^[a-zA-Z]{6}$/.test(Sharon_Nikitha)){
                alert("Name must be six character long");
                nameInput.focus();
                return false;
                }
                var password=passwordInput.value;
                if(password.length<6){
                alert("Password must me more than 6 characters");
                passwordInput.focus();
                return false;
                }
                alert("Registration successful");
            }
        )
    }
}
export default Sharon;
