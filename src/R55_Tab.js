import React,{Component} from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

class R55_Tab extends Component{
    constructor(props){
        super(props);
        this.state={ TabState:'React'}
    }

    toggle = (tabnum)=>{
        if(this.state.TabState !== tabnum) this.setState({TabState:tabnum});
    }

    render(){
        return (
            <>
            <Nav tabs>
                <NavItem>
                    <NavLink onClick={()=> {this.toggle('React');}}>First Tab</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={()=> {this.toggle('200');}}>Second Tab</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={this.state.TabState}>
                <TabPane tabId="React">
                    <h3>오예~ 불금</h3>
                    <p>좀만 있으면 집에 간다.</p>
                    </TabPane>
                <TabPane tabId="200">
                    <h3>나의 기분</h3>
                    <p>매우 신남</p>
                    </TabPane>
            </TabContent>
            </>
           
        )
    }    
}
export default R55_Tab;

