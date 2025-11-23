import React from "react";
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

function ContactsList({ contacts = [], selectedIds = [] }) {
  if (!contacts.length)
    return <p className={styles.message}>No contacts yet.</p>;

  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      <ul className={styles.contacts}>
        {contacts.map((c) => (
          <li key={c.id}>
            <ContactItem contact={c} isSelected={selectedIds.includes(c.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(ContactsList);
