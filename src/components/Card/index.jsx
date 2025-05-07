import { Button } from '../../Store/FavButton';
import styles from '../Card/Card.module.css';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';

export function Card({ data, handleNavigate, cardId, buttonName }) {
  const { id } = useParams();
  const buttonRef = useRef();

  if (!data) return <p>Data yoxdur</p>;

  return (
    <>
      <div className={styles.col4}>
        <div
          className={styles.card}
          onClick={() => {
            handleNavigate(data.id);
          }}
        >
          <div
            className={styles.favIcon}
            onClick={(e) => {
              // if (
              //   buttonRef.current.innerHTML ==
              //   '<i class="bi bi-balloon-heart"></i>'
              // ) {
              //   buttonRef.current.innerHTML =
              //     '<i class="bi bi-balloon-heart-fill"></i>';
              //   buttonRef.current.style.color = 'red';
              // } else {
              //   buttonRef.current.innerHTML =
              //     '<i class="bi bi-balloon-heart"></i>';
              //   buttonRef.current.style.color = 'black';
              // }
              e.stopPropagation();
            }}
          >
            <Button
              buttonName={buttonName}
              buttonRef={buttonRef}
              buttonId={cardId}
            />
          </div>
          <div className={styles.imageDiv}>
            <img src={data.avatar} alt='car' />
          </div>
          <div className={styles.carInfo}>
            <h2>{data.price}</h2>
            <p>
              {data.marka} {data.model}
            </p>
            <p>
              {data.year}, {data.engine}, {data.mileage}
            </p>
            <p className='location'>Bakı, bu gün 13:28</p>
            <p>{id}</p>
          </div>
        </div>
      </div>
    </>
  );
}
