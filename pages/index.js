import Header from '../components/Header';
import Footer from '../components/Footer';
import MessageList from '../components/MessageList';
import MessageItem from '../components/MessageItem';

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
