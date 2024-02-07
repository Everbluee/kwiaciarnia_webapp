import { useEffect } from 'react';

function useFetch(url, setData) {
  useEffect(() => {
    fetch(url, { mode: 'no-cors' })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
        //console.log({response});
      })
      .then(data => { setData(data); console.log(data)})
      .catch(error => console.error('Error fetching data:', error));
  }, [url, setData]);
}
 
export default useFetch;