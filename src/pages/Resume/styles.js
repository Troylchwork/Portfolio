import { styled, Stack } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
}));

export const ContentContainer = styled(Stack)({
    gap: "20px",
    margin: "0 20%",
});

export const HeaderContainer = styled("div")({
    display: "flex",
    justifyContent: "space-between",
});

export const Header = styled("div")({
    margin: "5%",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
});

export const SubHeader = styled("div")({
    margin: "20px 0px",
    fontWeight: "bold",
    fontSize: "28px",
    justifySelf: "center",
});

export const CardsContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "50px",
});

export const List = styled("ul")(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    paddingLeft: "0px",

    li: {
        padding: "0px 40px 0px 20px",
        position: "relative",
        lineHeight: "1.5",
        fontSize: "18px",

        "&::before": {
            content: '""',
            position: "absolute",
            left: "0",
            top: "8px",
            width: "10px",
            height: "10px",
            backgroundColor: theme.primary,
            borderRadius: "50%",
        },
    },
}));
