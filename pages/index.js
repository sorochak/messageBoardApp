import Header from '../components/Header';
import Footer from '../components/Footer';
import MessageFormAndList from '../components/MessageFormAndList';
import { Container, Row, Col } from 'react-bootstrap';

export default function App() {
  return (
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            <Header />
                        </Col>  
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            <MessageFormAndList />
                        </Col>  
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            <Footer />
                        </Col>  
                    </Row>
                </Container>
  )
}
