import { styled, Stack, Box } from "@mui/material";

export const BackgroundContainer = styled(Box)({
    display: "flex",
    height: "100vh",
});

export const BackgroundLeft = styled(Box)(({ theme }) => ({
    background: theme.darkBeige,
    flex: 2,
}));

export const BackgroundRight = styled(Box)(({ theme }) => ({
    position: "relative",
    flex: 3,
    padding: "100px",
}));

export const ModelContainer = styled(Stack)(({ theme }) => ({
    width: "200px",
    height: "200px",
    background: theme.lightBeige,
    borderRadius: "50%",
    margin: "40px",
}));

export const CardContent = styled(Stack)({
    width: "40rem",
});

export const ButtonGroup = styled(Box)({
    padding: "40px 0px",
});
