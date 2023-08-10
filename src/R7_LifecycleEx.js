import React, {Component} from 'react';

class R7_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2번 getDerivedStateFromProps 호출 : ' +props.prop_value);
        return {tmp_state:props.prop_value};
    }
    
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. 생성자 호출');
    }

    componentDidMount(){
        console.log('4. conponentDidMount 호출');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        
    }

    render(){
        console.log('3. render 함수 실행');
        return(
            <h2>[RENDER 함수 실행]</h2>
        )
    }
}

export default R7_LifecycleEx;