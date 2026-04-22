import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import Home from './compoments/home';
import Course from './compoments/Course';
import Allcourses from './compoments/Allcourses';
import AddCourse from './compoments/AddCourse';
import Header from  './compoments/header';
import { Button, Container,Row, Col } from 'reactstrap';
import Menus from './compoments/menus'; 
import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  // eslint-disable-next-line
  const btnHandle = () => {
    toast("This is a toast notification!");
  }

  return (
    <div>
      <Router>
        <ToastContainer />
      <Container>
        <Header />
        <Row>
          <Col md={4}>
          <Menus/>

          </Col>
          <Col md={8}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/allcourses" element={<Allcourses/>} />
            <Route path="/addcourse" element={<AddCourse/>} />
          </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
  );
}
export default App;
