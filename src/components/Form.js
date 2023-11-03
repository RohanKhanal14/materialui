import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";

const Form = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
        check: false,
        age: "0",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    name="name"
                    value={inputs.name}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Name"
                    sx={{ margin: "4px" }}
                    type="text"
                />

                <TextField
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Email"
                    type="email"
                    sx={{ margin: "4px" }}
                />

                <TextField
                    name="password"
                    value={inputs.password}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Password"
                    sx={{ margin: "4px" }}
                    type="password"
                />

                <FormGroup>
                    <FormControlLabel
                        onChange={(e) => {
                            setInputs((prev) => ({
                                ...prev,
                                check: !inputs.check,
                            }));
                        }
                        }
                        control={<Checkbox />}
                        sx={{ margin: "4px" }}
                        label="check me"
                    />
                </FormGroup>

                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                        name="age"
                        value={inputs.age}
                        onChange={handleChange}
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        label="Age"
                    >
                        <MenuItem value={0}>Zero</MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <Typography variant="h6"> {inputs.name} </Typography>
                <Typography variant="h6"> {inputs.email} </Typography>
                <Typography variant="h6"> {inputs.password} </Typography>
                <Button variant="contained" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Form;
