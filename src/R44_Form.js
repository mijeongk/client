import React,{Component} from "react";
import { Form,Label,Input,Row,Col, FormGroup } from 'reactstrap';

class R44_Form extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeInOut:true
        }
    }
  
    render(){        
        return (
            <div>
                <Form>
                    <Label for='exampleGender'>성별</Label>
                    <Input type='select' bsSize='sm'>
                        <option>선택하세요</option>
                        <option>여자</option>
                        <option>남자</option>
                    </Input>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for='exampleAddress'>주소</Label>
                                <Input type='text' name='address' id='address'/>
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for='exampleMobile'>연락처</Label>
                                <Input type='text' name='mobile' id='mobile'/>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup>
                                <Label for='exampleAge'>나이</Label>
                                <Input type='text' name='age' id='age'/>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }    
}
export default R44_Form;

