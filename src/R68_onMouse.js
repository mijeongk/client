import React,{Component} from "react";

class R67_onChange extends Component{    
    change=(e)=>{
        var a=e.target.value;
        console.log('값:'+a);
    }
    render(){
        return (
            <div>
                <input type="text" onChange={this.change}/>
                <select onChange={this.change}>
                    <option value="react">react</option>
                    <option value="200">200</option>
                </select>
            </div>
        )
    }    
}
export default R67_onChange;

