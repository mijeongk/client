import React,{Component} from "react";
import axios from "axios";

class R62_AxiosPost extends Component{
    componentDidMount(){
        axios.get('http://date.jsontest.com/',
        {
            a: "react", b: 200
        })
        .then(response => {alert(response.data.date)})
    }    
    render(){
        return (
            <div>
                <h1>axios post</h1>
            </div>
        )
    }    
}
export default R62_AxiosPost;

