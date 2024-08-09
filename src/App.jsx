import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import MemberList from './components/MemberList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/members" element={<MemberList />} />
      </Routes>
    </Router>
  );
};

export default App;
