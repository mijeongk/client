import React,{Component} from "react";

class R19_PropsBoolean extends Component{
    
    render(){
        let {
            aaa
        }=this.props;

        return (
            <div style={{padding:'0px'}}>
                {aaa?'참이다 ':'거짓이다 '}         
                {aaa.toString()}
            </div>
        )
    }    
}

export default R19_PropsBoolean;

