import React, { useEffect, useRef, useState } from "react";
import useStyles from "./Main.styles";
import AppHeader from "@/components/AppHeader";

type MainProps = {
  children: React.ReactNode;
};

const Main = (props: MainProps) => {
  const { children } = props;

  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />
      {children}
    </div>
  );
};

export default Main;
