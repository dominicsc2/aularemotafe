import React from "react";
import Link from "next/link";
import classes from "../Account.module.scss";

interface Props {
  value: string;
  link: string;
  url: string;
  foot_description?: any;
}
const Footer: React.FC<Props> = (props) => {
  return (
    <div>
      <footer id={classes.Footer}>
        <div>
          <p className={classes.Cuenta}>{props.value}</p>
          <Link href={props.url}>
            <p className={`${classes.Sesion} highlight`}>{props.link}</p>
          </Link>
          <div className={classes.Foot}>{props.foot_description}</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
