import React,{Component} from "react";

class R20_PropsObj extends Component{
    
    render(){
        let {
            Obj
        }=this.props;

        return (
            <div style={{padding:'0px'}}>
                {JSON.stringify(Obj)}
            </div>
        )
    }    
}

export default R20_PropsObj;

