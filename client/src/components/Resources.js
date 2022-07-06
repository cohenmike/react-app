import {React, useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectGold } from "../redux/slices/goldSlice";
import styles from "./Resources.module.css"

const Resources = () => {
    const gold = useSelector(selectGold);

    return (
        <div className={styles.container}>
            <span className={styles.item}>Gems: 0</span>
            <span className={styles.item}>Gold: {Math.floor(gold)}</span>
        </div>
    );
};

export default Resources;