import appColors from "@/assets/theme/appColor";
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles({
  name: "AppHeader",
  uniqId: "app_header",
})((theme, _, classes) => {

  return {
    root: {
      position: "relative",
      width: "100vw",
      height: "fit-content",
      padding: "10px 20px",
      backgroundColor: appColors.background
    },

    logo: {
      width: "15vw",
      height: "auto"
    }
}});

export default useStyles;
