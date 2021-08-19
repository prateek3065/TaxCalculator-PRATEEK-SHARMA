import React from "react";
import { Table } from "react-bootstrap";
const { v4: uuidv4 } = require("uuid");
export default function PrintTable({ sentences, pane, totalAmount }) {
  function printDescriptionOfTable() {
    if (pane === "left") return <th>Before Tax</th>;
    return <th>After Tax</th>;
  }
  function calculateTotal() {
    if (pane === "right")
      return (
        <tr>
          <td>Total = {totalAmount}</td>
        </tr>
      );
    else
      return (
        <tr>
          <td>...</td>
        </tr>
      );
  }
  if (sentences.length === 0) return null;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>{printDescriptionOfTable()}</tr>
      </thead>
      <tbody>
        {sentences.map((element) => {
          return (
            <tr key={uuidv4()}>
              <td>{element}</td>
            </tr>
          );
        })}
        {calculateTotal()}
      </tbody>
    </Table>
  );
}
