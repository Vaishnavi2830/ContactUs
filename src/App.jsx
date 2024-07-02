import "./App.css";
import ContactForm from "./components/Nagivation/ContactForm/ContactForm";
import ContactHeader from "./components/Nagivation/ContactHeader/ContactHeader.module";
import Navigation from "./components/Nagivation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
