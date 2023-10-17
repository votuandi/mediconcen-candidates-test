/* eslint-disable @next/next/no-img-element */
import useStyles from "./AppHeader.style";
import theme from "@/assets/theme";
import { useEffect, useRef, useState } from "react";

export default function AppHeader() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src="/img/img-logo.png" alt="" />
    </div>
  );
}
