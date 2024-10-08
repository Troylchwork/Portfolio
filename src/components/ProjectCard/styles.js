import { styled, Card } from "@mui/material";

export const CustomCard = styled(Card)({
    borderRadius: "20px",
    flex: 1,
    height: "25vw",
    margin: "0px 20px",
});

export const Title = styled("div")({
    position: "absolute",
    top: "65%",
    width: "100%",
    margin: "20px",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "",
    transition: "all 0.35s ease-in-out",
    opacity: 1,
    zIndex: 1,
});

export const SubTitle = styled("div")({
    position: "absolute",
    top: "75%",
    width: "100%",
    margin: "20px",
    color: "white",
    fontSize: "18px",
    transition: "all 0.35s ease-in-out",
    zIndex: 1,
});

export const GradientShadow = styled("div")({
    background:
        "linear-gradient(0deg, rgba(117, 205, 255, 0.8), rgba(0, 0, 0, 0))",
    position: "absolute",
    top: "0%",
    height: "100%",
    width: "100%",
    transition: "all 0.35s ease-in-out",
    " &:hover": {
        opacity: 0,
    },
    "&:hover ~ $Title": {
        opacity: 0,
    },
    "&:hover ~ $CardBackground": {
        height: "500px",
    },
});
