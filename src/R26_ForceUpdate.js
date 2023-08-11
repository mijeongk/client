import React,{Component} from "react";
import datatype from 'prop-types';

class R26_ForceUpdate extends Component{
    
    constructor(props){
        super(props);
        this.state={
            StateString: 'react'
        }
    }

    StateChange=(a)=>{
        if(a=='direct'){
            this.state.StateString='리액트';
            this.forceUpdate();
            console.log('직접변경: '+ this.state.StateString);
        }
        // if(a=='setstate'){
        //     this.setState({StateString: '리액트'})
        //     console.log('set변경: '+ this.state.StateString);
        // }
        // 앞서 언급한 forceUpdate와 동일
    }

    render(){
        return (
            <div style={{padding:'0px'}}>
                <button onClick={(e)=>this.StateChange('direct', e)}>state 직접변경</button>
                <button onClick={(e)=>this.StateChange('setstate', e)}>setstate로 변경</button>
                <br/>
                [state 변경하기] StateString : {this.state.StateString}
            </div>
        )
    }   

}

export default R26_ForceUpdate;

