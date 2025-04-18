import styles from '../Card/Card.module.css';
import { useParams } from 'react-router-dom';

export function Card({ data, handleNavigate }) {
  const { id } = useParams();

  if (!data) return <p>Data yxodur</p>;

  return (
    <>
      <div className={styles.col4}>
        <div
          className={styles.card}
          onClick={() => {
            handleNavigate(data.id);
          }}
        >
          <div className={styles.imageDiv}>
            <img src={data.avatar} alt='' />
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
