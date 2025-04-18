import React from 'react'
import { Card } from "../../components/Card";
import styles from "../CardWrapper/CardWrapper.module.css"
import { useFetch } from '../../hook/useFetchData';
import { useNavigate } from 'react-router-dom';

function CardWrapper() {
    const { data, loading } = useFetch();
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/autos/${id}`)

    }
    if (loading) {
        return <p className={styles.load}>Loading...</p>
    }
    if (data) {
        return <>
            <div className={styles.container}> {data.map((item) => <Card key={item.id} data={item} handleNavigate={handleNavigate} />)}</div>

        </>
    }

}

export default CardWrapper