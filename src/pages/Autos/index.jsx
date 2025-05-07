import styles from './Autos.module.css';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hook/useFetchData';

export function Autos() {
  const { data, loading, error } = useFetch();
  const { id } = useParams();

  const chosenCar = data.find((item) => item.id == id);

  if (loading) {
    return <p className={styles.load}>Loading...</p>;
  }
  if (data) {
    return (
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img src={chosenCar.avatar} alt='car' />
          <div className={styles.details}>
            <div className={styles.title}>
              {' '}
              {chosenCar.marka} {chosenCar.model}, {chosenCar.year},{' '}
              {chosenCar.engine}, {chosenCar.mileage}
            </div>
            <div className={styles.price}> {chosenCar.price}</div>

            <div className={styles.info}> Ibrahim - Bakı</div>
            <div className={styles.info}>
              {' '}
              Satıcı 04.18.2024 tarixindən Turbo.az'da
            </div>
            <div className={styles.contact}> Zəng et- (055) 780 43 00</div>
          </div>
        </div>
      </div>
    );
  }
}
