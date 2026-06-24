import styles from './MovieForm.module.css';
import { IoAdd } from "react-icons/io5";

const MovieForm = () => {

  return (
    <>
      <form className={`${styles.formStyle} container`}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter movie title..."
          />
          <button type="submit">
            <IoAdd size={24} />
          </button>
        </div>
      </form>
    </>
  )
}

export default MovieForm