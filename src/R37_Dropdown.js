import React,{Component} from "react";
import { ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R37_Dropdown extends Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    toggle=(e)=>{
        this.setState({open:!this.state.open});
    }
    render(){        
        return (
            <div>
                <ButtonDropdown isOpen={this.state.open} toggle={this.toggle}>
                    <DropdownToggle caret>버튼 Dropdown</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>헤더</DropdownItem>
                        <DropdownItem disabled>비활성화 버튼</DropdownItem>
                        <DropdownItem><a href='http://example.com'>example 웹 사이트로 이동</a></DropdownItem>
                        <DropdownItem onClick={e=>alert('Alert 버튼')}>Alert 버튼</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        )
    }    
}
export default R37_Dropdown;

