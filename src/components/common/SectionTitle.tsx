import { Box, Typography } from "@mui/material";

const SectionTitle = ({ sectionName }: { sectionName: string }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        height: "4rem",
        px: 3,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h5" color="#303030">
        {sectionName}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
