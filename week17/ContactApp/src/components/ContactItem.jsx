import React, { useContext, useCallback } from "react";
import ContactContext from "../context/ContactContext";
import styles from "./ContactItem.module.css";

function ContactItem({ contact, isSelected }) {
  const { toggleSelect, editHandler, deleteHandler } =
    useContext(ContactContext);

  const onToggle = useCallback(
    () => toggleSelect(contact.id),
    [toggleSelect, contact.id]
  );
  const onEdit = useCallback(
    () => editHandler(contact.id),
    [editHandler, contact.id]
  );
  const onDelete = useCallback(
    () => deleteHandler(contact.id),
    [deleteHandler, contact.id]
  );

  return (
    <>
      <div className={styles.item}>
        <input type="checkbox" checked={!!isSelected} onChange={onToggle} />

        <div className={styles.itemTitle}>
          <span>
            {contact.name}
            {contact.lastName}
          </span>

          <span>{contact.email}</span>
          <span>{contact.phone}</span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <button type="button" onClick={onEdit}>
            ✏️
          </button>
          <button type="button" onClick={onDelete}>
            🗑️
          </button>
        </div>
      </div>
    </>
  );
}

export default React.memo(ContactItem);
