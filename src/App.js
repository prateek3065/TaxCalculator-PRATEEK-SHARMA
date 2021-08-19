import { Container } from "react-bootstrap";
import PrintTable from "./PrintTable";

import InputItemPane from "./InputItemPane";
import { useState, useRef, useEffect } from "react";
function App() {
  const [string, setString] = useState(() => {
    //this is left pame sentence
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
/*
<Container>
      <Form>
        <Form.Group>
          <Form.Label>Header</Form.Label>
          <Container></Container>
        </Form.Group>
      </Form>
    </Container>
*/

/*
<Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
*/

/*
 <ButtonGroup aria-label="Basic example">
      <Button variant="secondary">Left</Button>
      <Button variant="secondary">Middle</Button>
      <Button variant="secondary">Right</Button>
    </ButtonGroup>
*/
