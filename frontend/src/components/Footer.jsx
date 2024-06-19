import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: 'skyblue', // Sky blue background color
    padding: '20px 0', // Add some padding for better spacing
  };

  const textStyle = {
    fontWeight: 'bold', // Make text bold
    fontSize: '1.5rem', // Increase font size
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p style={textStyle}>CampusCart &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
