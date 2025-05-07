import React, { useContext } from 'react';
import { Card } from '../../components/Card';
import styles from '../CardWrapper/CardWrapper.module.css';
import { useFetch } from '../../hook/useFetchData';
import { useNavigate } from 'react-router-dom';
import { HomeContext } from '../../pages/Home/context';

function CardWrapper() {
  const { newData } = useContext(HomeContext);
  console.log('ijnside', { newData });
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/autos/${id}`);
  };

  if (newData) {
    return (
      <>
        <div className={styles.container}>
          {newData.map((item) => {
            return (
              <Card
                key={item.id}
                data={item}
                handleNavigate={handleNavigate}
                cardId={item.id}
                buttonName='pushArray'
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default CardWrapper;
