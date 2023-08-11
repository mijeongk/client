import React,{Component} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class R50_Pagination extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed:false
        }
    }
    pagination=(type)=>{
        alert(type+" 페이지 이동");
    }
    render(){
        return (
            <div>
                <Pagination size='' aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("이전")}>&lt;</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("1")}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("2")}>2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink onClick={e=>this.pagination("다음")}>&gt;</PaginationLink>
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }    
}
export default R50_Pagination;

