import { useState, useEffect } from "react";
import { v4 } from "uuid";
import ConfirmModal from "./ConfirmModal";
import ContactsList from "./ContactsList";
import inputs from "./constants/inputs";
import styles from "./Contacts.module.css";

function Contacts() {

  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : [];
  });


  const [edit, setEdit] = useState(null);
  const [alert, setAlert] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });


  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const chengHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };


  const addHandler = () => {
    if (!contact.name || !contact.lastName || !contact.email || !contact.phone) {
      setAlert("Please Enter valid data");
      return;
    }
    setAlert("");
    const newContact = { ...contact, id: v4() };
    setContacts((prev) => [...prev, newContact]);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };


  const deleteHandler = (id) => {
    setDeleteTarget({ type: "single", id });
    setShowModal(true);
  };


  const bulkDeleteHandler = () => {
    setDeleteTarget({ type: "bulk" });
    setShowModal(true);
  };

  const editHandler = (id) => {
    const selectedContact = contacts.find((i) => i.id === id);
    setContact(selectedContact);
    setEdit(id);
  };

  const saveHandler = () => {
    const updatedContacts = contacts.map((item) =>
      item.id === edit ? contact : item
    );
    setContacts(updatedContacts);
    setEdit(null);
    setContact({ name: "", lastName: "", email: "", phone: "" });
  };
  const toggleSelect = (id) => {
    setSelectedIds((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((item) => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={chengHandler}
          />
        ))}
        {edit ? (
          <button type="button" onClick={saveHandler}>
            Save Changes
          </button>
        ) : (
          <button type="button" onClick={addHandler}>
            Add Contact
          </button>
        )}
      </div>

      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      {selectedIds.length > 0 && (
        <button className={styles.deletButtoon} onClick={bulkDeleteHandler}>
          Delete Selected ({selectedIds.length})
        </button>
      )}

      <ContactsList
        contacts={contacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        toggleSelect={toggleSelect}
        selectedIds={selectedIds}
      />

      {showModal && (
        <ConfirmModal
          message={
            deleteTarget?.type === "bulk"
              ? `Are you sure you want to delete ${selectedIds.length} contacts?`
              : "Are you sure you want to delete this contact?"
          }
          onConfirm={() => {
            if (deleteTarget?.type === "bulk") {
              const newContacts = contacts.filter(
                (contact) => !selectedIds.includes(contact.id)
              );
              setContacts(newContacts);
              setSelectedIds([]);
            } else if (deleteTarget?.type === "single") {
              const newContacts = contacts.filter(
                (contact) => contact.id !== deleteTarget.id
              );
              setContacts(newContacts);
            }
            setShowModal(false);
            setDeleteTarget(null);
          }}
          onCancel={() => {
            setShowModal(false);
            setDeleteTarget(null);
          }}
        />
      )}
    </div>
  );
}

export default Contacts;
