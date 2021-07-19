import './Normalize.css'
import './Main-CSS/styles.css'
import Section1 from "./Components/Header";
import Section2 from './Components/Section-2'
import Section3 from './Components/Section-3'
import Copyright from './Components/Copyright'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Copyright />
      <Footer />
    </>
  );
}

export default App;
