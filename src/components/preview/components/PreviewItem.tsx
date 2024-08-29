import { Box, Typography } from "@mui/material";
import { Card } from "../../../app/interface/interface.model";

const PreviewItem = ({
  item,
  inputValue,
  isLast,
}: {
  item: Card;
  inputValue: string;
  isLast: boolean;
}) => {
  return (
    <Box
      sx={{
        padding: "0.5rem",
        border: "1px solid #e6e6e6",
        borderBottom: isLast ? "1px solid #e6e6e6" : "0px",
        overflowWrap: "break-word",
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
