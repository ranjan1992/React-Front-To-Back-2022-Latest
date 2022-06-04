import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };
  const addFeed = (newFeed) => {
    newFeed.id = uuidv4();
    console.log(newFeed);
    setFeedback([newFeed, ...feedback]);
  };

  return (
    <>
      <Header />

      <div className="container">
        <FeedbackForm newFeed={addFeed} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleID={handleDelete} />
      </div>
    </>
  );
}

export default App;
