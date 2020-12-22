import React from "react";
import Secret from "./Secret";
import NotFound from "../NotFound/NotFound";

const BITCOIN = "bitcoin";

const SecretWrapper = (props) => {
  if (props.match.params.secretKey === BITCOIN) {
    return <Secret />;
  } else {
    return <NotFound />;
  }
};

export default SecretWrapper;
