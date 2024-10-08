import { styled, Stack, Typography } from "@mui/material";

export const Background = styled(Stack)(({ theme }) => ({
    background: theme.beige,
    paddingBottom: "5rem",
}));

export const BGTitle = styled(Typography)({
    position: "absolute",
    top: 350,
    left: 80,
    color: "white",
    fontSize: 80,
    fontWeight: "bold",
    fontFamily: "math, serif",
    textShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
});

export const BGSubTitle = styled(Typography)({
    position: "absolute",
    top: 460,
    left: 80,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
});

export const ProjectContainer = styled("div")({
    display: "flex",
    margin: "40px 40px 0px 40px",
});

export const Title = styled(Stack)({
    fontSize: "48px",
    fontWeight: "bold",
    padding: "40px 60px 0px 60px",
});
