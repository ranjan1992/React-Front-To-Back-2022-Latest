import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPages from './pages/AboutPages';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './components/context/FeedbackContext';

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
    <FeedbackProvider>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm newFeed={addFeed} />
                  <FeedbackStats />
                  <FeedbackList handleID={handleDelete} />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPages />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
