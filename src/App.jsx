import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "./containers/Navbar";

function App() {
  return (
    <Router>
      <Navbar className={`fixed top-0 left-0 z-10`} />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
