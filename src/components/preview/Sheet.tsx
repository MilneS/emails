import { Box } from "@mui/material";
import PreviewItem from "./components/PreviewItem";
import { useSelector } from "react-redux";
import { Card } from "../../app/interface/interface.model";

const Sheet = () => {
  const cardsOrder = useSelector((state: any) => state.cardsReducer.cardsOrder);
  const cardsInputs = useSelector(
    (state: any) => state.cardsReducer.cardsInputs
  );

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
      {cardsOrder.map((item: Card, i:number) => {
        const inputValue = cardsInputs.find(
          (inp: { id: string; value: string }) => inp.id === item.id
        ).value;
        return <PreviewItem key={item.id} item={item} inputValue={inputValue} isLast={i===cardsOrder.length-1}/>;
      })}
    </Box>
  );
};

export default Sheet;
