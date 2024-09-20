import { Box, Typography } from "@mui/material";
import { Card } from "../../../app/interface/interface.model";
import { useSelector } from "react-redux";

const PreviewItem = ({
  item,
  inputValue,
}: {
  item: Card;
  inputValue: string;
}) => {
  const selectedCard = useSelector(
    (state: any) => state.cardsReducer.selectedCard
  );
  const itemStyle = {
    padding: "0.5rem",
    border:
      selectedCard === item.id ? "2px solid #3f51b1" : "0px",
    overflowWrap: "break-word",
  };

  return (
    <Box sx={itemStyle}>
      {/* @ts-ignore */}
      <Typography variant={item.el} color={inputValue?"#303030":'#b5b5b5'}>
        {inputValue.length > 0 ? inputValue : item.name}
      </Typography>
    </Box>
  );
};

export default PreviewItem;
