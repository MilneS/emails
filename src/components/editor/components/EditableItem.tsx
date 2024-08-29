import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useDispatch, useSelector } from "react-redux";
import { setCardsInputs } from "../../../app/cardsSlice";
import { Inpt } from "../../../app/interface/interface.model";
import { useState } from "react";

const EditableItem = (props: any) => {
  const [itemVal, setItemVal] = useState("");
  const { itemId, isGrabbed, item } = props;
  const dispatch = useDispatch();
  const cardsInputs = useSelector(
    (state: any) => state.cardsReducer.cardsInputs
  );

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: itemId });
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    border: isGrabbed ? "1px solid #b5b5b5" : "0px",
    zIndex: isGrabbed ? "6" : "5",
  };
  const style = { transform: CSS.Transform.toString(transform), transition };

  const inputHandler = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const cardsInputsCopy = JSON.parse(JSON.stringify(cardsInputs));
    cardsInputsCopy.forEach((inp: Inpt) => {
      if (e.target.id === inp.id) {
        inp.value = e.target.value;
      }
    });
    dispatch(setCardsInputs(cardsInputsCopy));
  };

  return (
    <Card
      variant="outlined"
      sx={cardStyle}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <Box width="3rem" />
      <CardContent sx={{ width: "100%", px: 0 }}>
        {/* @ts-ignore */}
        <Typography variant="h6" pb={1}>
          {item.name}
        </Typography>
        <TextField
          // error
          helperText={`${props.item.maxChar} characters max`}
          id={itemId}
          label={`Type your ${item.name} here`}
          fullWidth
          sx={{ backgroundColor: "#ffffff" }}
          onBlur={inputHandler}
          onChange={(e) => setItemVal(e.target.value)}
          value={itemVal}
        />
      </CardContent>
      <Box
        width="3rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...listeners}
      >
        <DragIndicatorIcon
          sx={{
            "&:hover": { cursor: "grab" },
            color: "#b5b5b5",
          }}
        />
      </Box>
    </Card>
  );
};

export default EditableItem;
