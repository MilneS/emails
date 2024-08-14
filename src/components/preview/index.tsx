import { Box } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import Sheet from "./Sheet";

const style = {
  py: "3rem",
  backgroundColor: "#878787",
  height: "calc( 100% - 10rem )",
  display: "flex",
  justifyContent: "center",
  overflow: "scroll",
};

const Preview = () => {
  return (
    <Box width="60%" height="100vh">
      <Box>
        <SectionTitle sectionName={"Preview"} />
      </Box>
      <Box sx={style}>
        <Sheet/>
      </Box>
    </Box>
  );
};

export default Preview;
