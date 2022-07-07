import {React, useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectProducer } from '../redux/slices/producerSlice';
import { incrementByAmount } from '../redux/slices/goldSlice';
import useInterval from "../hooks/useInterval";
import Producer from "./Producer";
import styles from "./Producers.module.css"

const Producers = () => {
    const [allProducers, setAllProducers] = useState([]);
    const producer = useSelector(selectProducer);
    const dispatch = useDispatch();

    useInterval(() => {
        for (let i = 0; i < allProducers.length; i++) {
            const increase = Number(producer[allProducers[i].id] * allProducers[i].outputPerSecond/100.0);
            dispatch(incrementByAmount(increase));
        }
    }, 10)

    useEffect(() => {
        fetch('/api/producers',)
        .then(response => response.json())
        .then(data => setAllProducers(data))
        .catch(error => console.log(error));;
    }, [])

    return (
        <div className={styles.container}>
            {allProducers.map(item => (
                <Producer key={item.id} producer={item} />
            ))}
        </div>
    );
};

export default Producers;