import { styled, Card, Box, Stack } from "@mui/material";

export const CustomCard = styled(Card)(({ theme }) => ({
    display: "flex",
    margin: "20px",
    borderRadius: "10px",
    justifyContent: "space-between",
    maxWidth: "1600px",
    minWidth: "1200px",
    minHeight: "450px",
    boxShadow: theme.boxShadow,
    "&:hover": { boxShadow: theme.boxShadowHover },
}));

export const TitleContainer = styled(Box)({
    display: "flex",
    gap: "2rem",
    paddingTop: "3rem",
});

export const TitleContainerRight = styled(Box)({
    display: "flex",
    gap: "2rem",
    paddingTop: "3rem",
    justifyContent: "end",
});

export const ColorBlock = styled(Stack)(({ theme }) => ({
    background: theme.primary,
    width: "10px",
    borderRadius: "5px",
}));

export const Title = styled("div")(({ theme }) => ({
    color: theme.primary,
    fontWeight: "bold",
    fontSize: "22px",
}));

export const SubTitle = styled("div")({
    fontSize: "20px",
});
