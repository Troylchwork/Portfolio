import { styled, Box, Stack } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    minHeight: "1080px"
}));

export const CardList = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
});
