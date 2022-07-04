import {React, useState} from "react";
import { useSelector } from 'react-redux';
import { selectGold } from "../redux/slices/goldSlice";
import "./Resources.css"

const Resources = () => {
    const gold = useSelector(selectGold);

    return (
        <div className="container">
            <span className="item">Gems: 0</span>
            <span className="item">Gold: {gold}</span>
        </div>
    );
};

export default Resources;