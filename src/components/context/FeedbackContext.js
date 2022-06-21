import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      text: 'This item is from context',
      rating: 3,
    },
  ]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  //Update feedback item
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
    console.log(feedback);
  };

  const addFeed = (newFeed) => {
    newFeed.id = uuidv4();
    console.log(newFeed);
    setFeedback([newFeed, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeed,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
