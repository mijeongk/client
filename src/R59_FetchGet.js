import React,{Component} from "react";
import Swal from 'sweetalert2';

class R59_FetchGet extends Component{
    conponentDidmount= async () => {
        const response = await fetch('http://date/jsontest.com/');
        const body = await response.json();
        alert(body.date)
    }    
    render(){
        return (
            <div>
                <h1>fetch get</h1>
            </div>
        )
    }    
}
export default R59_FetchGet;

