import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {debounce} from 'lodash';

class R94_Debounce extends Component{    
    debounceFunc=debounce(()=>{
        console.log('디바운스 호출');
    },1000);

    render(){
        return (
            <div>
                <h2>검색어 입력</h2>
                <input type="text" onChange={this.debounceFunc}/>
            </div>
        )
    }
    componentDidMount(){
        
    }
}
export default R94_Debounce;

