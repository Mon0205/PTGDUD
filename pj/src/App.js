import './App.css';
import Contact from './exercise1-class/Contact';
import ContactList from './exercise2-class/ContactList';
import { contacts } from './exercise2-class/data';

function App() {
  return (
    <div className="App">
      {/* <Contact></Contact> */}
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
