import React,{Component} from "react";
import Swal from 'sweetalert2';

class R56_Basic extends Component{    
    componentDidMount(){
        Swal.fire('1. SweetAlert').then(result=>{
            alert('2. result.value:'+result.value);
        });
    }
    render(){
        return (
            <div>
                <h1>sweetalert2</h1>                
            </div>
        )
    }    
}
export default R56_Basic;

