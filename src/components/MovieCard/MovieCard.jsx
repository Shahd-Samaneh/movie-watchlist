import React from 'react'
import styles from './MovieCard.module.css';
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className={`${styles.card} flex-col`}>
        <h3>{movie.title}</h3>
        <div className={`${styles.actions} flex-row`}>
          <button className={styles.watchedButton}><IoCheckmark size={30} /></button>
          <button className={styles.deleteButton}><IoClose  size={30} /></button>
        </div>
      </div>
    </>
  )
}

export default MovieCard
