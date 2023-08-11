import React,{Component} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class R48_Model extends Component{
    constructor(props){
        super(props);
        this.state={
            modal:false
        }
    }
    toggle=()=>{
        this.setState({modal:!this.state.modal});
        console.log(this.state.modal);
    }
    render(){
        return (
            <div>
                <Button color="warning" onClick={this.toggle}>Modal 버튼</Button>
                <Modal isOpen={this.state.modal} fade={true} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>제목</ModalHeader>
                    <ModalBody>내용</ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>확인</Button>
                        <Button color="secondary" onClick={this.toggle}>닫기</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }    
}
export default R48_Model;

