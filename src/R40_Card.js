import React,{Component} from "react";
import { Button, ButtonDropdown, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class R40_Card extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    render(){        
        return (
            <div>
                <Card>
                    <CardImg top height={'200px'} src='https://cdn.pixabay.com/photo/2023/07/24/01/31/plane-8145957_640.jpg' alt='카드 이미지'/>
                    <CardBody>
                        <CardTitle>Card 제목</CardTitle>
                        <CardSubtitle>Card 부제목</CardSubtitle>
                        <CardText>Card 내용</CardText>
                        <Button>버튼</Button>
                    </CardBody>
                </Card>
            </div>
        )
    }    
}
export default R40_Card;

