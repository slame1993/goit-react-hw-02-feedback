import styles from '../Feedback/feedback.module.css';
export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={styles.btnList}>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);
