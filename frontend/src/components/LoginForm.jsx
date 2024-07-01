import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import '../styles/LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || 'Invalid email or password');
        console.error('Error response:', err.response);
      } else if (err.request) {
        setError('No response from server. Please try again later.');
        console.error('Error request:', err.request);
      } else {
        setError('An error occurred. Please try again.');
        console.error('Error message:', err.message);
      }
      console.error(err.config);
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Card className="login-card">
            <div className="login-title">Sign In</div>
            <Card.Body className="login-card-body">
              {error && <Alert variant="danger">{error}</Alert>}
              <div className="login-avatar">
                <FontAwesomeIcon icon={faUser} size="4x" color="#1e2a38" />
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="form-label">Username</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label className="form-label">Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox" className="mt-3">
                  <Form.Check type="checkbox" label="Remember me" className="text-white" />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 mt-4 login-btn"
                >
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-white">Forgot your password?</Link>
                <p className="mt-3 text-white">
                  Don't have an account? <Link to="/register" className="text-white">Register</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
