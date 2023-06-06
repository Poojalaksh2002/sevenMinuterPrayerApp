import { useNavigate } from "react-router-dom";

const End = () => {
  const navigate = useNavigate();
  const handleRestart = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>End</h2>
      <h1>Hallelujah</h1>
      <div>
        <button onClick={handleRestart}>RESTART</button>
        <button>EXIT</button>
      </div>
    </div>
  );
};
export default End;
