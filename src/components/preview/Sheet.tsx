import { Box } from "@mui/material";
import PreviewItem from "./components/PreviewItem";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { Card } from "../../app/interface/interface.model";

const Sheet = () => {
  const cardsOrder = useSelector((state: any) => state.cardsReducer.cardsOrder);
  const cardsInputs = useSelector((state: any) => state.cardsReducer.cardsInputs);
  useEffect(() => {
    console.log(cardsInputs);
  }, [cardsInputs]);

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
      {cardsOrder.map((item: Card) => {
        return <PreviewItem key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default Sheet;
