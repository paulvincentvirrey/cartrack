import React from "react";
import "./TextField.css";

type TextFieldProps = {
  className: string;
  value: string;
};

const TextField = ({ className, value }: TextFieldProps) => {
  return (
    <div className={className}>
      <p>{value}</p>
    </div>
  );
};

export default TextField;
