import { Box } from "@mui/material";
import PreviewItem from "./components/PreviewItem";
import { useSelector } from "react-redux";
import { Card, Template } from "../../appStore/interface/interface.model";

const Sheet = () => {
  const cardsOrder = useSelector((state: any) => state.cardsReducer.cardsOrder);
  const cardsInputs = useSelector(
    (state: any) => state.cardsReducer.cardsInputs
  );
  const selectedTemplate: Template = useSelector(
    (state: any) => state.cardsReducer.selectedTemplate
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
      {cardsOrder.map((item: Card, i: number) => {
        const inputValue = cardsInputs.find(
          (inp: { id: string; value: string }) => inp.id === item.id
        ).value;
        const foundCard = selectedTemplate.comps.find(
          (card) => card.id === item.id
        );
        return foundCard ? (
          <PreviewItem
            key={item.id}
            item={item}
            inputValue={inputValue}
          />
        ) : null;
      })}
    </Box>
  );
};

export default Sheet;
