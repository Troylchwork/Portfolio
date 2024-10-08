import { styled, Breadcrumbs } from "@mui/material";
export const DeafaultBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
    marginBottom: "20px",
    fontSize: "18px",
    color: theme.primary,
}));
export const LinkText = styled("div")({
    fontWeight: "bold",
});
