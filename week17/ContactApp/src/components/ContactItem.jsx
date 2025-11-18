import styles from "./ContactItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  deleteHandler,
  editHandler,
  toggleSelect,
  isSelected,
}) {
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        placeholder="checkbox"
        checked={isSelected}
        onChange={() => toggleSelect(id)}
      />
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <p>
        <span>📞</span>
        {phone}
      </p>
      <button onClick={() => editHandler(id)}>🪄</button>
      <button onClick={() => deleteHandler(id)}>🗑</button>
    </li>
  );
}

export default ContactItem;
