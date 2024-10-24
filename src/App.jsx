import { Container, Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import avatar from "./avatar.png"
const App = () => {
  const firstName = "John"; 
  const greetingMessage = firstName ? `Hello, ${firstName}` : "Hello, there!";

  return (
    <Container className="mt-5">
      <Card className="text-center">
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div className="mt-3">
        <h5>{greetingMessage}</h5>
        {firstName && <img src={avatar} alt="Your Avatar" style={{ width: '150px', borderRadius: '50%' }} />} {/* Replace with your avatar image URL */}
      </div>
    </Container>
  );
};

export default App;
