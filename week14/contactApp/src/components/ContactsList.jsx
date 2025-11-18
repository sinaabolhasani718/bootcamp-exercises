import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

import { useState } from "react";

function ContactsList({
  contacts,
  deleteHandler,
  editHandler,
  toggleSelect,
  selectedIds,
}) {
  console.log(contacts);

  const [search, setSearch] = useState("");
  const filteredContacts = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.lastName.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="SearchName ...."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {contacts.length ? (
        <ul className={styles.contacts}>
          {filteredContacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              toggleSelect={toggleSelect}
              isSelected={selectedIds.includes(contact.id)}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}> No contact yet!</p>
      )}
    </div>
  );
}

export default ContactsList;
