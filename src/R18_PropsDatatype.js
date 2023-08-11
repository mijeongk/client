import React,{Component} from "react";
import datatype from 'prop-types';

class R18_PropsDatatype extends Component{
    
    render(){
        let{
            String,Number,Boolean,Array,ObjectJson,Function
        }=this.props;
        
        return (
            <div style={{padding:'0px'}}>
                <p>문자:{String}</p>
                <p>숫자:{Number}</p>
                {/* <p>불린:{Boolean.toString()}</p>
                <p>배열:{Array.toString()}</p> */}
                <p>객체:{JSON.stringify(ObjectJson)}</p>
                <p>함수:{Function}</p>                
            </div>
        )
    }    
}
R18_PropsDatatype.propTypes={
    String:datatype.string,
    Number:datatype.number,
    Boolean:datatype.bool,
    Array:datatype.array,
    ObjectJson:datatype.object,
    Function:datatype.func,
}
export default R18_PropsDatatype;

