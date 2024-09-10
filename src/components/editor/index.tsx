import { Box } from "@mui/material";
import SectionTitle from "../common/SectionTitle";
import SortableCont from "./components/SortableCont";

export default function Editor() {
  return (
    <Box width="40%" height="100vh">
      <SectionTitle sectionName={"Editor"} />
      <SortableCont />
    </Box>
  );
}
