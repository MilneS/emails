import { Box } from "@mui/material";
import PreviewItem from "./components/PreviewItem";
import { firstTemplate } from "../../utils";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Sheet = () => {
  const cardsOrder = useSelector((state: any) => state.cardsReducer.cardsOrder);
  useEffect(() => {
    console.log(cardsOrder);
  }, [cardsOrder]);

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
      {firstTemplate.comps.map((item) => {
        return (
          <PreviewItem
            key={item.id}
            itemName={item.name}
            itemVariant={item.el}
          />
        );
      })}
    </Box>
  );
};

export default Sheet;
