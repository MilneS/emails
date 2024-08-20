import Editor from "./components/editor";
import Preview from "./components/preview";
import { Box, Divider } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
      }}
    >
      <Editor />
      <Divider orientation="vertical" flexItem sx={{ borderRight: '2px solid #545454' }}/>
      <Preview />
    </Box>
  );
}

export default App;
