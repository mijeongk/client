import React,{Component} from "react";
import {Breadcrumb,BreadcrumbItem} from 'reactstrap';

class R36_Breadcrumbs extends Component{
    
    render(){        
        return (
            <div id='top'>
                <Breadcrumb tag='nav' listTag='div'>
                    <BreadcrumbItem tag='a' href='#top'>top 이동</BreadcrumbItem>
                    <BreadcrumbItem tag='a' href='#bottom'>bottom 이동</BreadcrumbItem>
                </Breadcrumb>
                <div id='bottom' style={{marginTop:'1000px'}}>
                    <span>bottom</span>
                </div>
            </div>
        )
    }    
}
export default R36_Breadcrumbs;

