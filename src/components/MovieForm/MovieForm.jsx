import styles from './MovieForm.module.css';
import { IoAdd } from "react-icons/io5";
import { useState } from 'react';

const MovieForm = ({ onAddMovie }) => {

  const [movieTitle, setMovieTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!movieTitle.trim()) return;

    onAddMovie(movieTitle);

    setMovieTitle('');
  };

  return (
    <form
      className={`${styles.formStyle} container`}
      onSubmit={handleSubmit}
    >
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          placeholder="Enter movie title..."
        />

        <button type="submit">
          <IoAdd size={24} />
        </button>
      </div>
    </form>
  );
};

export default MovieForm;