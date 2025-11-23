export const initialState = {
  contacts: [],
  contact: {
    name: "",
    lastName: "",
    email: "",
    phone: "",
  },
  edit: null,
  alert: "",
  selectedIds: [],
  showModal: false,
  deleteTarget: null,
};

export default function contactReducer(state, action) {
  switch (action.type) {
    case "LOAD_CONTACTS_FROM_STORAGE":
      return {
        ...state,
        contacts: action.payload || [],
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        contact: initialState.contact,
        alert: "",
      };

    case "SET_EDIT":
      return {
        ...state,
        edit: action.payload.id,
        contact: action.payload.contact,
      };

    case "SAVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((item) =>
          item.id === state.edit ? state.contact : item
        ),
        edit: null,
        contact: initialState.contact,
      };

    case "TOGGLE_SELECT":
      return {
        ...state,
        selectedIds: state.selectedIds.includes(action.payload)
          ? state.selectedIds.filter((id) => id !== action.payload)
          : [...state.selectedIds, action.payload],
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
        selectedIds: state.selectedIds.filter((id) => id !== action.payload),
      };

    case "BULK_DELETE":
      return {
        ...state,
        contacts: state.contacts.filter(
          (c) => !state.selectedIds.includes(c.id)
        ),
        selectedIds: [],
      };

    case "CHANGE_INPUT":
      return {
        ...state,
        contact: {
          ...state.contact,
          [action.payload.name]: action.payload.value,
        },
      };

    case "SET_ALERT":
      return { ...state, alert: action.payload };

    case "CLEAR_ALERT":
      return { ...state, alert: "" };

    case "SHOW_MODAL":
      return { ...state, showModal: true, deleteTarget: action.payload };

    case "HIDE_MODAL":
      return { ...state, showModal: false, deleteTarget: null };

    default:
      return state;
  }
}
