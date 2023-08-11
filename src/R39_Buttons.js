import React,{Component} from "react";
import { Button, ButtonDropdown, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R39_Buttons extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    render(){        
        return (
            <div>
                <Button color="primary">목록</Button>
                <Button color="warning">수정</Button>
                <Button color="danger">삭제</Button>
            </div>
        )
    }
}
export default R39_Buttons;

