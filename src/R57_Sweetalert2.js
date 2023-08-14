import React,{Component} from "react";
import Swal from 'sweetalert2';

class R57_Sweetalert2 extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    saveAlert=(t,p,e)=>{
        Swal.fire({
            position:p,
            icon:'success',
            title:t,
            showConfirmButton:false,
            timer:1500
        });
    }
    render(){
        return (
            <div>
                <h1>sweetalert2</h1>
                <button onClick={()=>this.saveAlert('저장','center')}>저장</button>
                <button onClick={()=>this.saveAlert('수정','bottom-end')}>수정</button>
            </div>
        )
    }    
}
export default R57_Sweetalert2;

