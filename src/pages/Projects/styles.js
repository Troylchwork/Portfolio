import { styled, Stack, Typography } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    paddingBottom: "5rem",
}));

export const BackgroundImg = styled("img")(({ theme }) => ({
    objectFit: "cover",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
        height: "250px",
    },
    [theme.breakpoints.up("sm")]: {
        height: "450px",
    },
    [theme.breakpoints.up("md")]: {
        height: "650px",
    },
    [theme.breakpoints.up("lg")]: {
        height: "850px",
    },
}));

export const BGTitle = styled(Typography)(({ theme }) => ({
    position: "absolute",
    color: "white",
    fontWeight: "bold",
    fontFamily: "math, serif",
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",

    [theme.breakpoints.down("sm")]: {
        top: 130,
        left: 25,
        fontSize: 30,
    },
    [theme.breakpoints.up("sm")]: {
        top: 200,
        left: 35,
        fontSize: 50,
    },
    [theme.breakpoints.up("md")]: {
        top: 290,
        left: 80,
        fontSize: 65,
    },
    [theme.breakpoints.up("md")]: {
        top: 350,
        left: 80,
        fontSize: 65,
    },
}));

export const BGSubTitle = styled(Typography)(({ theme }) => ({
    position: "absolute",
    color: "white",
    fontWeight: "bold",

    [theme.breakpoints.down("sm")]: {
        top: 170,
        left: 25,
        fontSize: 12,
    },
    [theme.breakpoints.up("sm")]: {
        top: 260,
        left: 35,
        fontSize: 18,
    },
    [theme.breakpoints.up("md")]: {
        top: 375,
        left: 80,
        fontSize: 24,
    },
    [theme.breakpoints.up("md")]: {
        top: 425,
        left: 80,
        fontSize: 24,
    },
}));

export const ProjectContainer = styled("div")(({ theme }) => ({
    display: "flex",
    marginTop: "2rem",
    marginInline: "auto",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
        marginTop: "1rem",
        flexWrap: "wrap",
        // display: "gird",
        // gridTemplateColumns: "1fr 1fr",
    },
}));

export const InfoCardContainer = styled("div")(({ theme }) => ({
    alignItems: "center",
    rowGap: "40px",
    p: "40px 20px 0px 20px",

    [theme.breakpoints.down("sm")]: {
        pt: "20px",
    },
}));

export const Title = styled(Stack)({
    fontSize: "48px",
    fontWeight: "bold",
    padding: "40px 60px 0px 60px",
});
