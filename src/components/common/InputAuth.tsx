import { TextField } from "@mui/material";
import React from "react";

type InputType = "EMAIL" | "PASSWORD" | "TEXT";

interface InputAuthProps {
    title: string,
    id: string,
    type: InputType
}

const InputAuth: React.FC<InputAuthProps> = ({title, id, type}) => {
    return (
        <TextField id={id} type={type.toLowerCase()} label={title} variant="outlined" required/>
    )
}

export default InputAuth;