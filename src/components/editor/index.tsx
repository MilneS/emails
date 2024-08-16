import { Box } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import EditableItem from "./components/EditableItem";
import { firstTemplate } from "../../utils";

const Editor = () => {
  return (
    <Box width="40%" height="100vh">
      <SectionTitle sectionName={"Editor"} />
      {firstTemplate.comps.map((item, i) => {
        return <EditableItem itemName={item.name} itemMaxChar={item.maxChar} />;
      })}
    </Box>
  );
};

export default Editor;
