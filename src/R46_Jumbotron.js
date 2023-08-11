import React,{Component} from "react";
import { Jumbotron, Button } from 'reactstrap';

class R46_Jumbotron extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOut:true
        }
    }
  
    render(){        
        return (
            <div>
                <div style={{backgroundColor:"#D38C7C"}}>
                    <h1 className="display-4">React 200</h1>
                    <p className="h4">동해물과 백두산이</p>
                    <hr className="my-2"/>
                    <p>마르고 닳도록...</p>
                    <p className="lead">
                        <Button color="danger">Go Detail</Button>
                    </p>
                </div>
            </div>
        )
    }    
}
export default R46_Jumbotron;

