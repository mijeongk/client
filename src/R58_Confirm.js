import React,{Component} from "react";
import Swal from 'sweetalert2';

class R58_Confirm extends Component{
    deletAlert = (e) => {
        Swal.fire({
            title: '정말 삭제하시겠습니까?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#4b088a',
            cancelButtonColor: '#01DF01',
            confirmButtonText: '예',
            cancelButtonText: '아니요'
        }).then((result) => {
            if(result.vallule){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted',
                    'sweetalert2 삭제 완료',
                    'success'
                )
            }
        })
    }
    
    render(){
        return (
            <div>
                <h1 id='deletId'>sweetalert2</h1>
                <button onClick={e=>this.deletAlert()}>삭제</button>
            </div>
        )
    }    
}
export default R58_Confirm;

