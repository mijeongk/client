import React,{Component} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap';

class R49_Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:false
        }
    }
    toggle=()=>{
        this.setState({collapsed:!this.state.collapsed});
        console.log(this.state.modal);
    }
    render(){
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Navbar</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2"/>
                    <Collapse isOpen={this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">react</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="http://example.com">200</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }    
}
export default R49_Navbar;

