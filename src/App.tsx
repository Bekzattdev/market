import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate("/signup")}>Register</p>
      <p onClick={() => navigate("/signin")}>Authenti cation</p>
    </div>
  );
};

export default App;
