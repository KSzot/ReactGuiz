import React, { useEffect, useState } from 'react';
import { fetchQuizCategory, fetchQuizCategoryTmp } from './api/ApiCall';
import DropDown, { Categories } from './components/dropDown/DropDown';
const App = () => {
  // console.log(fetchQuizCategory());
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchQuizCategoryTmp().then((res) => {
      setData(res);
    });
  }, []);
  // let tmp = fetchQuizCategoryTmp();
  // console.log(tmp);
  //console.log(data.trivia_categories);
  const selectedDifficult = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'Hard' },
  ];
  return (
    <>
      <div>Work</div>
      <DropDown categories={data} text={'Choose category question'} />
      <DropDown
        categories={selectedDifficult}
        text={'Choose level difficulty'}
      />
    </>
  );
};

export default App;
