import { useReducer, useEffect } from "react";
import ContactContext from "./ContactContext";
import contactReducer from "./contactReducer";
import { v4 } from "uuid";

function ContactProvider({ children }) {
  const initialState = {
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    contact: { name: "", lastName: "", email: "", phone: "" },
    alert: "",
    edit: false,
    selectedIds: [],
    showModal: false,
    deleteTarget: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state.contacts));
  }, [state.contacts]);

  useEffect(() => {
    if (!state.alert) return;
    const timer = setTimeout(() => dispatch({ type: "CLEAR_ALERT" }), 3000);
    return () => clearTimeout(timer);
  }, [state.alert]);

  const validate = () => {
    const { name, lastName, email, phone } = state.contact;

    if (!name || !lastName || !email || !phone) {
      return "All fields are required";
    }

    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;
    if (!emailRegex.test(email)) {
      return "Email format is invalid";
    }

    if (phone.length < 6) {
      return "Phone number is too short";
    }

    if (!state.edit) {
      const exists = state.contacts.some((c) => c.email === email);
      if (exists) return "Email already exists";
    }

    return null;
  };

  const changeHandler = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const addHandler = () => {
    const error = validate();
    if (error) return dispatch({ type: "SET_ALERT", payload: error });

    dispatch({
      type: "ADD_CONTACT",
      payload: { ...state.contact, id: v4() },
    });
  };

  const editHandler = (id) => {
    const found = state.contacts.find((c) => c.id === id);
    dispatch({ type: "SET_EDIT", payload: { id, contact: found } });
  };

  const saveHandler = () => {
    const error = validate();
    if (error) return dispatch({ type: "SET_ALERT", payload: error });

    dispatch({ type: "SAVE_CONTACT" });
  };

  const deleteHandler = (id) => {
    dispatch({
      type: "SHOW_MODAL",
      payload: { type: "single", id },
    });
  };

  const bulkDeleteHandler = () => {
    dispatch({ type: "SHOW_MODAL", payload: { type: "bulk" } });
  };

  const toggleSelect = (id) => {
    dispatch({ type: "TOGGLE_SELECT", payload: id });
  };

  const confirmDelete = () => {
    if (state.deleteTarget?.type === "single") {
      dispatch({ type: "DELETE_CONTACT", payload: state.deleteTarget.id });
    } else {
      dispatch({ type: "BULK_DELETE" });
    }
    dispatch({ type: "HIDE_MODAL" });
  };

  const cancelDelete = () => dispatch({ type: "HIDE_MODAL" });

  return (
    <ContactContext.Provider
      value={{
        state,
        dispatch,

        changeHandler,
        addHandler,
        editHandler,
        saveHandler,
        deleteHandler,
        bulkDeleteHandler,
        toggleSelect,
        confirmDelete,
        cancelDelete,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
