import { styled, TextField, Stack, FormControl } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    minHeight: "1280px",
}));

export const ForomContainer = styled(Stack)({
    gap: "20px",
    margin: "0 20%",
    alignItems: "center",
});

export const Control = styled(FormControl)({
    margin: "20px",
});

export const Header = styled("div")({
    margin: "5%",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    position: "relative",
});

export const Label = styled("label")({
    fontSize: "20px",
    fontWeight: "bold",
});

export const Input = styled("input")({
    width: "100%",
    padding: "8px",
    margin: "10px 0",
});

export const Textarea = styled("textarea")({
    width: "100%",
    padding: "8px",
    margin: "10px 0",
});
