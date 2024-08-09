import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css'; // Import the CSS file for styling

const MemberCard = ({ member, onEdit, onDelete }) => {
  return (
    <Card className="member-card border shadow-sm" style={{ width: '18rem', borderRadius: '10px', overflow: 'hidden' }}>
      <Card.Body>
        <Card.Title className="text-center mb-3" style={{ color: '#343a40', fontWeight: 'bold' }}>
          {member.name}
        </Card.Title>
        <Card.Text className="text-muted">
          <strong>Age:</strong> {member.age} <br />
          <strong>Mobile:</strong> {member.mobile}
        </Card.Text>
        <div className="d-flex justify-content-between mt-4">
          <Button variant="outline-success" onClick={() => onEdit(member.id)} className="btn-edit">
            Edit
          </Button>
          <Button variant="outline-danger" onClick={() => onDelete(member.id)} className="btn-delete">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MemberCard;
