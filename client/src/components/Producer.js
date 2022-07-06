import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectProducer, addProducer } from "../redux/slices/producerSlice";
import { selectGold, decrementByAmount } from "../redux/slices/goldSlice";
import styles from './Producer.module.css';

const Producer = ({producer}) => {
    const dispatch = useDispatch();
    const producers = useSelector(selectProducer);
    const gold = useSelector(selectGold);

    const handleClick = () => {
        if (gold < producer.cost) return;

        dispatch(decrementByAmount(producer.cost));
        dispatch(addProducer(producer.id));
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <div>Name: {producer.name}</div>
            <div>Cost: {producer.cost}</div>
            <div>Owned: {producers[producer.id]}</div>
        </div>
    );
};

export default Producer;