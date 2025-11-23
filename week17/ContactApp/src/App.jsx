
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import ContactProvider from "./context/ContactProvider";
function App() {
  return (
    

        <ContactProvider>
          <Header />
          <Contacts />
        </ContactProvider>

    
  );
}

export default App;
