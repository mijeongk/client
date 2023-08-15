import React,{Component} from "react";

class R71_onKey extends Component{    
    onKey=(event,e)=>{
        var a=e.target.value;
        console.log('이벤트:'+event+', 값:'+a);
    }
    Submit(e){
        var a=document.getElementById('inputId').value;
        console.log('입력값:'+a);
        e.preventDefault(); //기본 이벤트 동작 안함
    }
    render(){
        return (
            <div>
                onKeyDown: <input type="text" onKeyDown={e=>this.onKey('onKeyDown',e)}/><br/>
                onKeyPress: <input type="text" onKeyPress={e=>this.onKey('onKeyPress',e)}/><br/>
                onKeyUp: <input type="text" onKeyUp={e=>this.onKey('onKeyUp',e)}/><br/>
                <form onSubmit={this.Submit}>
                    <input type="text" name="inputName" id="inputId"/>
                    <input type="submit" value="입력완료"/>
                </form>
            </div>
        )
    }    
}
export default R71_onKey;

