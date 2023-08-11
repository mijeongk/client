import React,{Component} from "react";
import datatype from 'prop-types';

class R21_PropsRequired extends Component{
    
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
R21_PropsRequired.propTypes={
    ReactString:datatype.isRequired,
}
export default R21_PropsRequired;

