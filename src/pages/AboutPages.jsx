import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';

function AboutPages() {
  return (
    <Card>
      <div className="about">
        <h1>About the Project</h1>
        <p>This is a React App to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to={'/'}>Back to Home</Link>
        </p>
      </div>
    </Card>
  );
}
export default AboutPages;
