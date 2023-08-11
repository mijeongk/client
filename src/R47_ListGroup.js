import React,{Component} from "react";
import { Jumbotron, Button, ListGroup, ListGroupItem, Badge } from 'reactstrap';

class R47_ListGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOut:true
        }
    }
  
    render(){        
        return (
            <div>
                <ListGroup>
                    <ListGroupItem color="danger" className="justify-content-between">
                        Badge <Badge pill>200</Badge>
                    </ListGroupItem>
                    <ListGroupItem disabled tag="a" href="#">
                        Disable
                    </ListGroupItem>
                    <ListGroupItem tag="a" href="http://example.com">
                        Link
                    </ListGroupItem>
                    <ListGroupItem tag="button" action onClick={e=>alert("button")}>Button</ListGroupItem>
                </ListGroup>                
            </div>
        )
    }    
}
export default R47_ListGroup;

