import React, {Component} from 'react';

class R15_Map extends Component{
    
    render(){
        return(
            <h2>[이것은 Map]</h2>
        )
    }
    componentDidMount(){
        var arr1=[1,2,3,4];
        let arr2=arr1.map(x=>x*2);
        console.log(arr2);

        var objArr = [{key:'react', value:'200'}, {key:'리액트', value: '이백'}];
        let objArr2 = objArr.map((obj, index)=>{
            console.log(index+','+JSON.stringify(obj));
            var Obj={};
            Obj[obj.key]=obj.value;
            return Obj;
        });
        console.log(JSON.stringify(objArr2));
    }
}
export default R15_Map;