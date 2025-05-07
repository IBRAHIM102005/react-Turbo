import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import styles from '../CardWrapper/CardWrapper.module.css';
import { useFetch } from '../../hook/useFetchData';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../pages/Home/context';

function CardWrapper() {
  const { data, loading } = useFetch();

  const { newData } = useContext(HomeContext);
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/autos/${id}`);
  };

  console.log('erwer', { newData });
  // if (loading) {
  //   return <p className={styles.load}>Loading...</p>;
  // }
  if (newData) {
    return (
      <>
        <div className={styles.container}>
          {newData.map((item) => (
            <Card
              key={item.id}
              data={item}
              handleNavigate={handleNavigate}
              cardId={item.id}
              buttonName='pushArray'
            />
          ))}
        </div>
      </>
    );
  }
}

export default CardWrapper;
