import { useEffect, useState } from 'react';
import { useFetch } from '../../hook/useFetchData';
import { HomeContext } from './context';

export const HomeProvider = ({ children }) => {
  const { data } = useFetch();

  const [newData, setNewData] = useState(data);

  const modifiedData = [
    {
      marka: 'Hamisi',
      avatar:
        'https://turbo.azstatic.com/uploads/f460x343/2024%2F09%2F13%2F15%2F56%2F14%2F2a40e3c4-ad38-4df2-b143-9f9770017c29%2F26954_DWgEQQqRrb1W5yDQKFgsVA.jpg',
      price: '',
      model: '',
      year: '',
      engine: '',
      mileage: '',
      id: '0',
    },
    ...data,
  ];

  useEffect(() => {
    if (data.length != 0) {
      setNewData(data);
      console.log('fchf', data);
    }
  }, [data]);
  return (
    <HomeContext.Provider value={{ data, newData, modifiedData, setNewData }}>
      {children}
    </HomeContext.Provider>
  );
};
