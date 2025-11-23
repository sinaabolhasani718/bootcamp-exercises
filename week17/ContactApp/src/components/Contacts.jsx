import { useContext } from "react";
import ContactContext from "../context/ContactContext";
import ContactsList from "./ContactsList";
import ConfirmModal from "./ConfirmModal";
import inputs from "../components/constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {
  const {
    state,
    changeHandler,
    addHandler,
    saveHandler,
    bulkDeleteHandler,
    confirmDelete,
    cancelDelete,
  } = useContext(ContactContext);

  const {
    contact,
    contacts,
    alert,
    edit,
    selectedIds,
    showModal,
    deleteTarget,
  } = state;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input) => (
          <input
            key={input.name}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name] || ""}
            onChange={changeHandler}
          />
        ))}

        <button type="button" onClick={edit ? saveHandler : addHandler}>
          {edit ? "Save Changes" : "Add Contact"}
        </button>
      </div>

      {alert && (
        <div className={styles.alert}>
          <p>{alert}</p>
        </div>
      )}

      {selectedIds.length > 0 && (
        <button
          type="button"
          className={styles.deletButtoon}
          onClick={bulkDeleteHandler}
        >
          Delete Selected ({selectedIds.length})
        </button>
      )}

      <ContactsList contacts={contacts} selectedIds={selectedIds} />

      {showModal && (
        <ConfirmModal
          message={
            deleteTarget?.type === "bulk"
              ? `Are you sure you want to delete ${selectedIds.length} contacts?`
              : "Are you sure you want to delete this contact?"
          }
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
}

export default Contacts;
