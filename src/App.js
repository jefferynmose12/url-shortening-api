import react from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;