import { Box, Typography } from "@mui/material";

const PreviewItem = ({
  itemName,
  itemVariant,
}: {
  itemName: String;
  itemVariant: String;
}) => {
  const isPopulated = false;
  return (
    <Box
      sx={{
        padding: "0.5rem",
        border: "1px solid red",
        marginTop: "1rem",
      }}
    >
      {/* @ts-ignore */}
      <Typography variant={itemVariant}>
        {isPopulated ? null : itemName}
      </Typography>
    </Box>
  );
};

export default PreviewItem;
