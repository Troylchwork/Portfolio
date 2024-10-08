import { Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PROJECTS_PATH } from "../../constants/paths";
import { LinkText, DeafaultBreadcrumbs } from "./styles";
export default function CustomeBreadcrumbs({ name = "" }) {
    return (
        <DeafaultBreadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="medium" />}
        >
            <Link underline="hover" color="inherit" href={PROJECTS_PATH}>
                Project
            </Link>
            <LinkText>{name}</LinkText>
        </DeafaultBreadcrumbs>
    );
}
