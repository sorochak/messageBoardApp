import Header from '../components/Header';
import Footer from '../components/Footer';
import MessageFormAndList from '../components/MessageFormAndList';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export async function getStaticProps() {
    let jsonData;

    try {
        const { data } = await axios.get('http://localhost:3004/api/messages');
        jsonData = data;
    } catch(error) {
        console.log('API Error: ' + error);
    }

    return {
        props: {
            jsonData
        }
    }
}

export default function App( { jsonData }) {
  return (
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            <Header />
                        </Col>  
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            <MessageFormAndList jsonData = {jsonData} />
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
