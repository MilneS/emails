import { Box } from "@mui/material";
import PreviewItem from "./components/PreviewItem";
import { firstTemplate } from "../../utils";

const Sheet = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        height: "fit-content",
        minHeight: "calc( 100% - 6rem )",
        width: "70%",
        padding: "3rem",
      }}
    >
      {firstTemplate.comps.map((item) => {
        return <PreviewItem itemName={item.name} itemVariant={item.el} />;
      })}
    </Box>
  );
};

export default Sheet;
