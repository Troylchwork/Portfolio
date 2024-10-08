import { styled, Stack, Box } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
}));

export const Image = styled(Box)({
    height: "540px",
    width: "960px",
    borderRadius: "20px",
});

export const SystemContainer = styled(Stack)(({ marginTop }) => ({
    width: "960px",
    alignItems: "center",
    marginTop: marginTop ? "10px" : "0px",
}));
