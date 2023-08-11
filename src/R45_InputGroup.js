import React,{Component} from "react";
import { Input, InputGroup, InputGroupText, Button } from 'reactstrap';

class R45_InputGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOut:true
        }
    }
  
    render(){        
        return (
            <div>
                <InputGroup>
                    <Input placeholder="userid"/>
                    <InputGroupText>@reactmail.com</InputGroupText>
                </InputGroup>
                <InputGroup>                    
                    <Button>버튼</Button>                    
                    <Input />
                </InputGroup>
            </div>
        )
    }    
}
export default R45_InputGroup;

