import React,{Component} from "react";
import { Progress } from 'reactstrap';

class R52_Progress extends Component{
    constructor(props){
        super(props);
        this.state={
            a:0
        }
    }
    componentDidMount(){
        this.progress();
    }
    progress=()=>{
        if(this.state.a!==100){
            setTimeout(function(){
                this.setState({
                    a:this.state.a+1
                });
                this.progress();
            }.bind(this),100);
        }
    }
    render(){
        return (
            <div>
                <Progress color="info" value={this.state.a}>
                    {this.state.a}%
                </Progress><br/>
                <Progress multi>
                    <Progress bar color="warning" value="25">25%</Progress>
                    <Progress bar color="success" value="35">Wow!</Progress>
                    <Progress bar color="" value="15">Meh</Progress>
                    <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                </Progress>
            </div>
        )
    }    
}
export default R52_Progress;

