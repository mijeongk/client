import React,{Component} from "react";
import axios from 'axios';

class R66_onClick extends Component{    
    click=(a)=>{
        if(a!='string')
            a='a 클릭'
        console.log('값:'+a);
    }
    render(){
        return (
            <div>                
                <button onClick={e=>this.click('버튼 클릭')}>버튼 클릭</button>
                <div onClick={e=>console.log('div 클릭')}>div 클릭</div>
                <a href='javascript:' onClick={this.click}>a 클릭</a>
            </div>
        )
    }    
}
export default R66_onClick;

