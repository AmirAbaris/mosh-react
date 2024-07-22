import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible &&
        <Alert>
          <h1>Hello world</h1>
        </Alert>
      }
      <Button onClick={() => setAlertVisibility(!alertVisible)}>
        Do something
      </Button>
    </>
  );
}

export default App;
