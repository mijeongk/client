import React,{Component} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class R51_Popover extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:false
        }
    }

    render(){
        return (
            <div>
                <Button id="Popover_id" type="button">
                    Popover button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>메모 제목</PopoverHeader>
                    <PopoverBody>메모 내용</PopoverBody>                    
                </UncontrolledPopover>
            </div>
        )
    }    
}
export default R51_Popover;