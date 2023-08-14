import React,{Component} from "react";

class R60_FetchPost extends Component{    
    componentDidMount=async()=>{
        const response=await fetch('http://date.jsontest.com/',{
            method:'post',
            Headers:{
                'Content-Type':'application/json'
            },
            body:{
                a:'react',
                b:200
            }
        });
        const body=await response.json();
        alert(body.date);
    }
    render(){
        return (
            <div>                
                <h1>fetch post</h1>
            </div>
        )
    }    
}
export default R60_FetchPost;

