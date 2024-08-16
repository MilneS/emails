import { Box, Card, CardContent, TextField, Typography } from "@mui/material";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

const EditableItem = ({
  itemName,
  itemMaxChar,
}: {
  itemName: String;
  itemMaxChar: number;
}) => {
  const cardStyle = {
    border: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  };

  return (
    <Card variant="outlined"
     sx={cardStyle}>
      <Box width="3rem" />
      <CardContent sx={{ width: "100%", px: 0 }}>
        {/* @ts-ignore */}
        <Typography variant="h6" pb={1}>
          {itemName}
        </Typography>
        <TextField
          // error
          helperText={`${itemMaxChar} characters max`}
          id="outlined-basic"
          label={`Type your ${itemName} here`}
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
