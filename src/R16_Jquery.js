import React,{Component} from "react";
import $ from 'jquery';

class R16_Jquery extends Component{
    
    input_alert=(e)=>{
        var a=$('#inputId').val();
        alert(a);
    }
    render(){
        return (
            <div>
                <h2>[이것은 Jquery]</h2>
                <input id='inputId' name='inputName'/>
                <button id='buttonId' onClick={e=>this.input_alert(e)}>Jquery Button</button>
            </div>            
        )
    }
    
}
export default R16_Jquery;


