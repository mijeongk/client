import React,{PureComponent} from "react";

class R27_ComponentClass extends PureComponent{
    
    constructor(props){
        super(props);
        this.state={
            StateString: 'react',
            StateArrayObj: ['react', {react:'200'}]
        }
    }

    sub=(a)=>{
        if(a=='str'){
            this.setState({StateString:'react'});
        }
        if(a=='arr'){
            this.setState({StateString:['react', {react:'200'}]});
        }
    }

    render(){
        console.log('render() 실행')
        return (
            <div style={{padding:'0px'}}>
                <button onClick={(e)=>this.sub('str')}>문자열 직접변경</button>
                <button onClick={(e)=>this.sub('arr')}>객체 변경</button>
            </div>
        )
    }   

}

export default R27_ComponentClass;

