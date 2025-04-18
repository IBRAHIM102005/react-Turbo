import React from 'react'
import "./Home.css"
import CardWrapper from "../../components/CardWrapper";
import { useFetch } from "../../hook/useFetchData.jsx"


function Home() {
    const { data, loading, error } = useFetch();
    if (loading) {
        return <><p className='home'>Loading...</p></>
    }
    if (error) {
        return <><p className='home'>error</p></>
    }

    if (data) {
        return (
            <>
                <div className='home'>Home</div>


                <CardWrapper />


            </>

        )
    }

}

export default Home