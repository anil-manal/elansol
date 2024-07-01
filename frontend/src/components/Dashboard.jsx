import { useState } from 'react';
import { Table, Button, Modal, Form, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUser, faCog, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [users, setUsers] = useState([]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setRole('');
    setStatus('');
  };

  const handleSave = () => {
    const newUser = {
      _id: Math.random().toString(36).substr(2, 9), // Simulated ID generation
      name,
      role,
      status,
      createdDate: new Date().toISOString(),
    };
    setUsers([...users, newUser]);
    handleClose();
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user._id !== id));
  };

  return (
    <Container className="dashboard-container py-5">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">Dashboard</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover responsive className="users-table text-center">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Role</th>
                <th>Status</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <FontAwesomeIcon icon={faUser} className="user-icon mr-2" />
                    {user.name}
                  </td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>{new Date(user.createdDate).toLocaleDateString()}</td>
                  <td>
                    <Button variant="outline-primary" className="action-button mx-1">
                      <FontAwesomeIcon icon={faCog} />
                    </Button>
                    <Button
                      variant="outline-danger"
                      className="action-button mx-1"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Button variant="primary" className="floating-button" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label className="form-label-black">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ backgroundColor: 'white', color: 'black' }}
              />
            </Form.Group>
            <Form.Group controlId="formRole" className="mt-3">
              <Form.Label className="form-label-black">Role</Form.Label>
              <Form.Control
                as="select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <option value="">Select role</option>
                <option value="Admin">Admin</option>
                <option value="Reader">Reader</option>
                <option value="Writer">Writer</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formStatus" className="mt-3">
              <Form.Label className="form-label-black">Status</Form.Label>
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <option value="">Select status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Suspended">Suspended</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Dashboard;
