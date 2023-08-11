import React,{Component} from "react";
import {Badge,Button} from 'reactstrap';

class R35_Badges extends Component{
    
    render(){        
        return (
            <div>
                <h1>제품 이름 <Badge color="secondary">hit</Badge></h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="http://example.com" color="light"><span style={{color:'#333'}}>GoLink</span></Badge>
            </div>
        )
    }    
}
export default R35_Badges;

