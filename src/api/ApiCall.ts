import { resolve } from 'dns';
import { rejects } from 'assert';

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
