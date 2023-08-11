import React,{Component} from "react";
import { Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R38_ButtonGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            number:10
        }
    }
    move=(a)=>{
        if(a==='Left'){
            this.setState({number:this.state.number-1})
        }else if(a==='Middle'){
            this.setState({number:10})
        }else if(a==='Right'){
            this.setState({number:this.state.number+1})
        }
    }
    render(){        
        return (
            <div>
                <ButtonGroup>
                    <Button onClick={e=>this.move('Left')}>Left</Button>
                    <Button onClick={e=>this.move('Middle')}>Middle</Button>
                    <Button onClick={e=>this.move('Right')}>Right</Button>
                </ButtonGroup>
                <br/>
                {this.state.number}
            </div>
        )
    }    
}
export default R38_ButtonGroup;

