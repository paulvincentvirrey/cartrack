import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import SmsIcon from "@material-ui/icons/Sms";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

type IconProps = {
  className: string;
  value: string;
};

const Icon = ({ className, value }: IconProps) => {
  let icon = <i />;

  switch (value) {
    case "email":
      icon = <EmailIcon />;
      break;
    case "phone":
      icon = <PhoneIcon />;
      break;
    case "sms":
      icon = <SmsIcon />;
      break;
    case "error":
      icon = <ErrorOutlineIcon />;
      break;
    default:
      icon = <p>Icon not found</p>;
  }

  return <div className={className}>{icon}</div>;
};

export default Icon;
