import { useEffect, useState } from 'react';
import { useFetch } from '../../hook/useFetchData';
import { HomeContext } from './context';

export const HomeProvider = ({ children }) => {
  const { data } = useFetch();
  const [newData, setNewData] = useState(data);

  console.log({ data });
  const modifiedData = [
    ...data,
    {
      marka: 'Hamisi',
      avatar:
        'https://turbo.azstatic.com/uploads/f460x343/2024%2F09%2F13%2F15%2F56%2F14%2F2a40e3c4-ad38-4df2-b143-9f9770017c29%2F26954_DWgEQQqRrb1W5yDQKFgsVA.jpg',
      price: '52 000$',
      model: 'S7',
      year: '2017',
      engine: '4.0L',
      mileage: '50 000 km',
      id: '1',
    },
  ];

  useEffect(() => {
    if (data) setNewData(data);
  }, []);
  return (
    <HomeContext.Provider value={{ data, newData,modifiedData, setNewData }}>
      {children}
    </HomeContext.Provider>
  );
};
