import { Button, IconButton, Typography } from "@mui/material";
import React from "react";
import { Fingerprint } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

const Test = () => {
  return (
    <div>
      <Typography variant="h1" align="center">
        Hello world
      </Typography>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        sx={{ margin: "5px" }}
        onClick={() => {
          alert("hello");
        }}
      >
        hello
      </Button>
      <Button variant="contained" sx={{ margin: "5px" }}>
        hi
      </Button>
      <Button variant="contained" sx={{ margin: "5px" }}>
        bye bye
      </Button>
      <IconButton aria-label="fingerprint" color="primary">
        <Fingerprint />
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default Test;
