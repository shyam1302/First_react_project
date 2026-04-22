import React, {useEffect} from "react";
import { Container, Button } from "reactstrap";
const Home = () => {
    useEffect(()=>{
        document.title="Home";
    },[]);
    return (
        <div>
            <div className="p-5 bg-light rounded text-center">
                <h1> This is home page </h1>
                <p> This is the home component. </p>
                <Container>
                <Button color="primary" outline>
                    Start using
                </Button>
            </Container>
            </div>
           
        </div>
    );
}

export default Home;