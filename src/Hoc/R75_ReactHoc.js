import React,{Component} from "react";
import withHocComponent from './withHocComponent';

class R75_ReactHoc extends Component{    
    
    render(){
        console.log('2. HocComponent render');
        return (
            <div>
                <h2>props.name:{this.props.name}</h2>
            </div>
        )
    }    
}
export default withHocComponent(R75_ReactHoc,'R75_ReactHoc');


