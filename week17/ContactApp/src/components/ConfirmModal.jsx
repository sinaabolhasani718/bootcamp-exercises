import { useEffect } from "react";
import styles from "./ConfirmModal.module.css";

function ConfirmModal({ message, onConfirm, onCancel }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onCancel();
      if (e.key === "Enter") onConfirm();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onConfirm, onCancel]);

  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <p>{message}</p>
        <div className={styles.actions}>
          <button className={styles.cancelBtn} type="button" onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.confirmBtn} type="button" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
