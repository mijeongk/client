import React, {Component} from 'react';

class R8_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state){
        console.log('2. getDerivedStateFromProps 호출 : ' +props.prop_value);
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
        this.setState({tmp_state2 : true});
    }

    shouldComponentUpdate(props, state){
        console.log('6. shouldComponentUpdate 호출 / tmp_state2 = '
        + state.tmp_state2);
        return state.tmp_state2
    }

    render(){
        console.log('3. render 함수 실행');
        return(
            <h2>[RENDER 함수 실행]</h2>
        )
    }
}

export default R8_LifecycleEx;