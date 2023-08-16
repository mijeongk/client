import React,{Component} from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

class R89_router extends Component{
    constructor (props){
        super(props);
        this.state={
            val:''
        }
    }
    componentDidMount(){
        axios.get('./users')
        .then(response=>{
            console.log(response.data);
            this.setState({val:response.data});
        });
    }
    render(){
        return (
            <div>
                <h1>Node 서버 값 요청</h1>         
                <h2>{this.state.val}</h2>     
            </div>
        )
    }
}
export default R89_router;

