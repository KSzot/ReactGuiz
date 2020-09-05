import React from 'react';
import { fetchQuizCategory } from './api/ApiCall';
const App = () => {
  console.log(fetchQuizCategory());
  return <div>Work</div>;
};

export default App;
