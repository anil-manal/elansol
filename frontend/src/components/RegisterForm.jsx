import { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/LoginForm.css'; // Import the CSS file

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        dateOfBirth,
        email,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/dashboard');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('Registration failed');
      console.error(err);
    }
  };

  return (
    <Container fluid className="login-container">
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Card className="login-card register-card">
            <div className="login-title">Register</div>
            <Card.Body className="login-card-body">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                  <Form.Label className="form-label">Name</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control register-form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicDateOfBirth" className="mt-3">
                  <Form.Label className="form-label">Date of Birth</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </InputGroup.Text>
                    <Form.Control
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className="form-control register-form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="mt-3">
                  <Form.Label className="form-label">Email address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control register-form-control"
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
                      className="form-control register-form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
                  <Form.Label className="form-label">Confirm Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="input-group-text">
                      <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control register-form-control"
                    />
                  </InputGroup>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-4 login-btn">
                  Register
                </Button>
              </Form>
              <div className="text-center mt-3">
                <p className="text-white">
                  Already have an account? <Link to="/login" className="text-white">Login</Link>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
