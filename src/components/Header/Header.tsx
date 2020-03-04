import React from "react";
import { Address } from '../Invoice/Invoice';
import classes from "./header.module.scss";
interface companyHeader {
  companyName: string;
  logo: string; //url for now
  address: Address; //multi line string
  email: string;
  invoiceNumber: number
};

const header = (props: companyHeader): JSX.Element => {
  return (
    <div className={classes.header}>
      <div className={classes.headerLeft}>
        <div className={classes.companyLogo}>
          <img src={props.logo} />
          <h2>{props.companyName}</h2>
        </div>
        <div className={classes.address}>
          <p>{props.address.street}<br />
            {props.address.city}, {props.address.state}<br />
            {props.address.country}<br />
            Contact: {props.email}</p>
        </div>
      </div>
      <div className={classes.headerMid}>
        <h2>Invoice {props.invoiceNumber}</h2>
      </div>
      <div className={classes.heaedrRight}>
        <p>
          Invoice No. {props.invoiceNumber}<br />
          Invoice date data to go heare<br />
          date data to go heare<br />
        </p>

      </div>
    </div>)
}


export default header;
