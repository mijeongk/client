import React,{Component} from "react";

class R22_PropsDefault extends Component{
    
    render(){
        let {
            ReactString,
            ReactNumber
        }=this.props;

        return (
            <div style={{padding:'0px'}}>
                {ReactString}{ReactNumber}
            </div>
        )
    }  
}

R22_PropsDefault.defaultProps = {
    ReactString: '리액트 ',
    ReatcNumber: 400
}

export default R22_PropsDefault;

