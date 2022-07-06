import {React, useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectProducer } from '../redux/slices/producerSlice';
import { incrementByAmount } from '../redux/slices/goldSlice';
import Producer from "./Producer";
import styles from "./Producers.module.css"

const Producers = () => {
    const [allProducers, setAllProducers] = useState([]);
    const producer = useSelector(selectProducer);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('/api/producers',)
        .then(response => response.json())
        .then(data => setAllProducers(data))
        .catch(error => console.log(error));;
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
          dispatch(incrementByAmount(producer[1] * allProducers[0].outputPerSecond/100.0));
          dispatch(incrementByAmount(producer[2] * allProducers[1].outputPerSecond/100.0));
        }, 10);
    
        return () => clearInterval(intervalId);
      }, [producer]);

    return (
        <div className={styles.container}>
            {allProducers.map(item => (
                <Producer key={item.id} producer={item} />
            ))}
        </div>
    );
};

export default Producers;