import React from "react";
import "./DetailField.css";

type DetailFieldProps = {
  label: string;
  value: string;
};

const DetailField = ({ label, value }: DetailFieldProps) => {
  return (
    <div className="field">
      <label>{label}</label>
      <p>{value}</p>
    </div>
  );
};
export default DetailField;
