import React,{Component} from "react";

class R33_ReturnMap extends Component{
    
    render(){
        const element_Array = [
            <li>react</li>
            , <li>200</li>
            , <li>Array map</li>
        ];

        return(
            <ul>
                {element_Array.map((array_val)=> array_val)}
            </ul>
        )
    }
}

export default R33_ReturnMap;
