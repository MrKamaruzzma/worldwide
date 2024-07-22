import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function ButtonBack() {
  const nevigate = useNavigate();

  return (
    <Button
      type="back"
      onClick={(e) => {
        e.preventDefault();
        nevigate(-1);
      }}
    >
      &larr; Back
    </Button>
  );
}

export default ButtonBack;
