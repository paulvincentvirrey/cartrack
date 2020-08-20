import React from "react";
import { Avatar, DetailField, Icon, TextField } from "../../components";
import { User } from "../../store/types";
import "./Card.css";

type CardProps = {
  data: User;
};

const Card = ({ data }: CardProps) => {
  const { name, username, email, address, phone, website, company } = data;
  const fullAddress: string =
    address.street +
    ", " +
    address.suite +
    ", " +
    address.city +
    ", " +
    address.zipcode;

  return (
    <div className="card__container">
      <div className="card__background"></div>
      <Avatar />
      <div className="card__summary">
        <TextField className="card__summary-header" value={name} />
        <TextField className="card__summary-subheader" value={email} />
        <div className="card__summary-icon-row">
          <Icon className="card__summary-icon" value="email" />
          <Icon className="card__summary-icon" value="phone" />
          <Icon className="card__summary-icon" value="sms" />
        </div>
      </div>
      <div className="card__details">
        <DetailField label="Username" value={username} />
        <DetailField label="Address" value={fullAddress} />
        <DetailField label="Phone" value={phone} />
        <DetailField label="Website" value={website} />
        <DetailField label="Company" value={company.name} />
      </div>
    </div>
  );
};

export default Card;
