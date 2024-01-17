'use client';
import React from "react";
import styles from './style.module.css'

export default function index({index, title, setModal, link, desc}) {

    return (
        <div 
        onMouseEnter={() => {setModal({active: true, index})}}
        onMouseLeave={() => {setModal({active: false, index})}}
        onClick={() => {window.open(link, '_blank')}}
        className={styles.project}
        >
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    )
}