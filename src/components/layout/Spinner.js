import React, { Fragment } from "react";
import spinner from "./spinner.png";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      className='rotate-loading-logo'
      alt='Loading...'
    />
  </Fragment>
);

export default Spinner