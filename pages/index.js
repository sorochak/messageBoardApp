import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import MessageList from '../components/MessageList/MessageList';
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
                            <MessageList />
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
