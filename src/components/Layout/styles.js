import { styled, Box } from "@mui/material";

export const TitleBar = styled("div")({
    display: "flex",
    width: "100%",
    height: "80px",
    backgroundColor: " white",
    position: "fixed",
    zIndex: 1,
    top: 0,
    alignItems: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
});

export const DesktopMenu = styled("div")({
    display: "flex",
    gap: "35px",
    flex: 1,
    padding: "40px",
    justifyContent: "space-between",
    "@media (max-width: 500px)": {
        display: "none",
    },
});

export const LogoLink = styled("a")({});

export const LinkContainer = styled(Box)({
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
});

export const LinkTitle = styled("div")(({ theme }) => ({
    fontWize: "24px",
    fontWeight: "bold",

    "&::before": {
        content: '""',
        position: "absolute",
        left: "15px",
        top: "32px",
        width: "15px",
        height: "15px",
        backgroundColor: theme.primary,
    },
}));

export const LinkSubtitle = styled("div")({});

export const FooterContainer = styled(Box)({
    display: "flex",
    padding: "20px",
    justifyContent: "space-between",
    textAlign: "center",
    zIndex: 2,
});

export const FooterTitle = styled("div")({
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
});
