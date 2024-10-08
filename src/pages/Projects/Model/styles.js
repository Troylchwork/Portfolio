import { styled, Stack, Box } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
}));

export const ImageContainer = styled(Box)({
    display: "flex",
    margin: "0px 20px",
});
