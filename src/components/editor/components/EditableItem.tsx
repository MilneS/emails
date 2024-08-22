import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const EditableItem = (props: any) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    border: props.isGrabbed ? "1px solid #b5b5b5" : "0px",
    zIndex: props.isGrabbed ? "6" : "5",
  };
  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <Card
      variant="outlined"
      sx={cardStyle}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <Box width="3rem" />
      <CardContent sx={{ width: "100%", px: 0 }}>
        {/* @ts-ignore */}
        <Typography variant="h6" pb={1}>
          {props.item.name}
        </Typography>
        <TextField
          // error
          helperText={`${props.item.maxChar} characters max`}
          id="outlined-basic"
          label={`Type your ${props.item.name} here`}
          fullWidth
          sx={{ backgroundColor: "#ffffff" }}
        />
      </CardContent>
      <Box
        width="3rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
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
