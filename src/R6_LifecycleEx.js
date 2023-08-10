import React, {Component} from 'react';

class R6_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2번 getDerivedStateFromProps 호출 : ' +props.prop_value);
        return {};
    }
    
    constructor(props){
        super(props);
        this.state = {};
        console.log('1. 생성자 호출');
    }

    render(){
        console.log('3. render 함수 실행');
        return(
            <h2>[RENDER 함수 실행]</h2>
        )
    }
}

export default R6_LifecycleEx;