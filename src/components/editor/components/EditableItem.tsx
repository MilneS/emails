import { Card, CardContent, TextField, Typography } from "@mui/material";

const EditableItem = ({
  itemName,
  itemMaxChar,
}: {
  itemName: String;
  itemMaxChar: number;
}) => {
  return (
    <Card variant="outlined" sx={{ px: 2, border: "0px" }}>
      <CardContent>
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
    </Card>
  );
};

export default EditableItem;
