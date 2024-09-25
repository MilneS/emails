import { Save } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import SaveModal from "../editor/components/SaveModal";

const SectionTitle = ({ sectionName }: { sectionName: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        height: "4rem",
        px: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" color="#303030">
        {sectionName}
      </Typography>
      {sectionName === "Editor" && <SaveModal />}
    </Box>
  );
};

export default SectionTitle;
