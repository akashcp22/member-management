import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeMember, editMember } from '../redux/memberSlice';
import MemberCard from './MemberCard';

const MemberList = () => {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members); // Assuming 'members' is the state slice name

  const handleEdit = (id) => {
    const updatedName = prompt("Enter new name:");
    const updatedAge = prompt("Enter new age:");
    const updatedMobile = prompt("Enter new mobile number:");
    
    if (updatedName && updatedAge && updatedMobile) {
      dispatch(editMember({ id, updates: { name: updatedName, age: updatedAge, mobile: updatedMobile } }));
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      dispatch(removeMember(id));
    }
  };

  return (
    <div className="member-list">
      {members.map(member => (
        <MemberCard
          key={member.id}
          member={member}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default MemberList;

