import React from "react";
import { ListGroup,ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const menus=()=>{
    return(
         <ListGroup>
            <ListGroupItem tag={Link} to="/" action>Home</ListGroupItem>
            <ListGroupItem tag={Link} to="/allcourses" action>All courses</ListGroupItem>
            <ListGroupItem tag={Link} to="/addcourse" action>Add course</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            <ListGroupItem tag="a" href="#!" action>Contact</ListGroupItem>
         </ListGroup>
    )
}

export default menus;