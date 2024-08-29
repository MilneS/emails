import { Box, Typography } from "@mui/material";
import { Card } from "../../../app/interface/interface.model";

const PreviewItem = ({
  item,
  inputValue,
}: {
  item: Card;
  inputValue: string;
}) => {
  return (
    <Box
      sx={{
        padding: "0.5rem",
        border: "1px solid red",
        marginTop: "1rem",
      }}
    >
      {/* @ts-ignore */}
      <Typography variant={item.el}>
        {inputValue.length > 0 ? inputValue : item.name}
      </Typography>
    </Box>
  );
};

export default PreviewItem;
