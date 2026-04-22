import React, {useEffect} from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";


const AddCourse = () => {
    useEffect(()=>{
            document.title="Add course";
        },[]);
    return(
        <>
            <h1 className="text-center">Fill course Detail</h1>
            <Form>
                <FormGroup>
                    <label htmlFor="userId">
                        course id
                    </label>
                    <Input
                    type="text"
                    placeholder="Enter here"
                    name="userId"
                    id="userId"/>
                </FormGroup>
                 <FormGroup>
                    <label htmlFor ="title">
                        course title
                    </label>
                    <Input
                    type="text"
                    placeholder="Enter here"
                    name="title"
                    id="title"/>
                </FormGroup>
                 <FormGroup>
                    <label htmlFor="description">
                        course Description
                    </label>
                    <Input
                    type="textarea"
                    placeholder="Enter description here"
                    id="description"
                    style={{height: 150, width: "100%"}}/>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">
                        add course
                    </Button>
                    <Button color="warning ml-2">
                        clear
                    </Button>
                </Container>
            </Form>
        </>
    );
};
export default AddCourse;