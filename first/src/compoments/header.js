import React from "react";
import { Card,CardBody,CardText,CardTitle } from "reactstrap";
function Header({name, title}) {
    return (
        <div>
             <Card className="my-2" color="warning">
                <CardBody>
                    <h1 className="text-center my-4">welcome to course appliction</h1> 
                </CardBody>
            </Card>
        </div>
    );
}

export default Header;