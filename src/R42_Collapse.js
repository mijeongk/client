import React,{Component} from "react";
import { Card, Button, CardBody, UncontrolledCollapse } from 'reactstrap';

class R42_Collapse extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    render(){        
        return (
            <div>
                <Button color="warning" id="toggle">
                    펼치기/접기
                </Button>
                <UncontrolledCollapse toggler="#toggle">
                    <Card>
                        <CardBody>
                            React 200
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>
            </div>
        )
    }    
}
export default R42_Collapse;

