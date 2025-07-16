import React from 'react';
import AddSweetForm from './components/AddSweetForm';
import SweetList from './components/SweetList';

const App = () => {
  return (
    <div>
      <h1>Sweet Shop Management System</h1>
      <AddSweetForm />
      <SweetList />
    </div>
  );
};

export default App;
