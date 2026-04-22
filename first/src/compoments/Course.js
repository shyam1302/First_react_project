import {
    Card,CardBody,CardText,Button,Container,CardSubtitle
} from "reactstrap";

const Course = ({course}) => {
    return (
        <Card> 
            <CardBody>
                <CardSubtitle> 
                    {course.title}
                </CardSubtitle>
                <CardText>
                    {course.description}
                </CardText>
                <Container className="text-center">
                    <Button color="danger">
                        delete
                    </Button>
                    <Button className="ml-3" color="primary">
                        update
                    </Button>
                </Container>
            </CardBody>
        </Card>

    )
}
export default Course;