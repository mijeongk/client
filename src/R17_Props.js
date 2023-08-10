import React,{Component} from "react";

class R17_Props extends Component{
    render(){
        let a=this.props.aaa;
        a+=' 안녕';

        return(
            <div>{a}</div>
        )
    }
    
}
export default R17_Props;