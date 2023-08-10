import React, {Component} from 'react';

class R5_LifecycleEx extends Component {
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

export default R5_LifecycleEx;