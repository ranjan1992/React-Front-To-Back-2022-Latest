import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  return (
    <>
      <Header />
      <FeedbackStats feedback={feedback} />
      <div className="container">
        <FeedbackList feedback={feedback} handleID={handleDelete} />
      </div>
    </>
  );
}

export default App;
