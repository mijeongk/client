import React,{Component} from "react";
import { Card,Button, CardBody, UncontrolledCollapse, Fade } from 'reactstrap';

class R43_Fade extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOut:true
        }
    }
    toggle=()=>{
        this.setState({fadeInOut:!this.state.fadeInOut});
    }    
    render(){        
        return (
            <div>
                <Button color="success" onClick={this.toggle}>
                    Fade In/Out
                </Button>
                <Fade in={this.state.fadeInOut} tag='h1'>
                    동해물과 백두산이 마르고 닳도록...
                </Fade>
            </div>
        )
    }    
}
export default R43_Fade;

