import React, {Component} from 'react';

class R14_ForEach extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        return(
            <h2>[이것은 ForEach]</h2>
        )
    }

    componentDidMount(){
        var arr1=[1,2,3,4];
        var arr2=[];

        for(var i=0; i<arr1.length; i++){
            arr2.push(arr1[i]);
        }
        console.log('데이터:' + arr2);

        var arr3=[5,6,7,8];
        var arr4=[];
        arr3.forEach((a)=>{
            arr4.push(a);
        });
        console.log('데이터:' + arr4);
    }
}
export default R14_ForEach;