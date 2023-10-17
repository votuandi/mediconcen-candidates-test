import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "MainLayout",
  uniqId: "main_layout",
})((theme, _, classes) => {
  return {
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "fit-content",
        minHeight: "100vh"
      }
    }
  }
);

export default useStyles;
