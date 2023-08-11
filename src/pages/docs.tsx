
import {concurrencyRequest} from '@/utils/concurrencyRequest'
import { useEffect } from 'react';

const DocsPage = () => {
  useEffect(() => {
    const promiseArr = [];

    for (let i = 1; i <= 20; i++) {
        const url = `https://jsonplaceholder.typicode.com/todos/${i}`
        const getUrl = async() => {
           return await fetch(url)
        }
        promiseArr.push(getUrl);
    }
    
    concurrencyRequest(promiseArr, 2)
  }, [])
  return (
    <div>
      <p>This is umi docs.</p>
    </div>
  );
};

export default DocsPage;
