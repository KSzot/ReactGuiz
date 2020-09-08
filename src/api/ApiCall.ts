import { totalmem } from 'os';

const API_CATEGORY_URL = 'https://opentdb.com/api_category.php';

export const fetchQuizCategory = () => {
  return new Promise((resolve, rejects) => {
    fetch(API_CATEGORY_URL)
      .then((result) => {
        if (!result.ok) throw result.json();
        return result.json();
      })
      .then((result) => {
        //console.log(result);
        resolve(result);
      })
      .catch((error) => error.then((body: any) => rejects(body)));
  });
};

export const fetchQuizCategoryTmp = async () => {
  const response = await fetch(API_CATEGORY_URL);
  const data = await response.json();
  const tmp = await data;
  console.log(tmp.trivia_categories);
  return tmp.trivia_categories;
};
