import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";

function App() {
  // const items = ["NYC", "San Francisco", "Los Angeles", "Chicago", "Miami"];

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          Hello <span>oh shiii</span>
        </Alert>
      )}
      <Button color="warning" onClick={() => setAlertVisible(true)}>
        sample button
      </Button>
    </div>
  );
}

export default App;
