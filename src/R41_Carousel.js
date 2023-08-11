import React,{Component} from "react";
import { UncontrolledCarousel } from 'reactstrap';

const items=[
    {
        src:'http://han.gl/q6jDb',
        altText:'슬라이드1 이미지 대체 문구',
        caption:'슬라이드1 설명',
        header:'슬라이드1 제목'
    },{
        src:'http://han.gl/d4jbj',
        altText:'슬라이드2 이미지 대체 문구',
        caption:'슬라이드2 설명',
        header:'슬라이드2 제목'
    },{
        src:'http://han.gl/U7FFH',
        altText:'슬라이드3 이미지 대체 문구',
        caption:'슬라이드3 설명',
        header:'슬라이드3 제목'
    }
];

class R41_Carousel extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    render(){        
        return (
            <div>
                <UncontrolledCarousel items={items}/>
            </div>
        )
    }    
}
export default R41_Carousel;

