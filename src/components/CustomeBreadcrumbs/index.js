import { Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { PROJECTS_PATH } from "../../constants/paths";
import { LinkText, DeafaultBreadcrumbs } from "./styles";
import { useTranslation } from "react-i18next";
export default function CustomeBreadcrumbs({ name = "" }) {
    const { t } = useTranslation();
    return (
        <DeafaultBreadcrumbs
            aria-label="breadcrumb"
            separator={<NavigateNextIcon fontSize="medium" />}
        >
            <Link underline="hover" color="inherit" href={PROJECTS_PATH}>
                {t("common.projects")}
            </Link>
            <LinkText>{name}</LinkText>
        </DeafaultBreadcrumbs>
    );
}
