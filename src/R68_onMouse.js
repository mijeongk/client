import React,{Component} from "react";

class R68_onMouse extends Component{    
    mouse=(e)=>{
        console.log('값:'+e);
    }
    render(){
        return (
            <div>
                <input type="text" onMouseOut={e=>this.mouse('input')}/>
                <select onMouseOut={e=>this.mouse('select')}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        )
    }    
}
export default R68_onMouse;

