import { Container } from "react-bootstrap";
import PrintTable from "./PrintTable";

import InputItemPane from "./InputItemPane";
import { useState, useRef, useEffect } from "react";
function App() {
  const [string, setString] = useState(() => {
    return [[], [], 0];
  });

  const ref = useRef(() => {
    return "";
  });

  useEffect(() => {}, [string]);

  return (
    <Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        <PrintTable
          sentences={string[0]}
          pane={"left"}
          totalAmount={string[2]}
        />
        <PrintTable
          sentences={string[1]}
          pane={"right"}
          totalAmount={string[2]}
        />
      </Container>
      {InputItemPane(setString, ref)}
    </Container>
  );
}
export default App;
