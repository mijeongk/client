import React,{Component} from "react";
import {Alert, UncontrolledAlert} from 'reactstrap';

class R34_ReactstrapAlerts extends Component{
    
    render(){
        
        return(
            <div>
                <Alert color="light">
                    간단한 경고창 [color: light]
                </Alert>
                <UncontrolledAlert color="warning">
                    기본기능 경고창 [color: warging]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R34_ReactstrapAlerts;

