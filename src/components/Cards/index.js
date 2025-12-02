import {
    useTheme,
    useMediaQuery,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
    DefaultCard,
    HomeCard,
    HomeTitle,
    HomeSubTitle,
    BlueDivider,
    ResumeCard,
    ResumeCardContent,
    ButtonGroup
} from "./styles";
import { PROJECTS_PATH, RESUME_PATH } from "../../constants/paths";
import CustomeTypography from "../CustomeTypography";
import CustomeButton from "../../components/CustomeButton";
import { useTranslation } from "react-i18next";

export default function Cards({
    title,
    subTitle,
    companyName,
    variant = "primary",
    img,
    imgTitle = "empty",
    children,
    ...props
}) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation();

    switch (variant) {
        case "home":
            return (
                <HomeCard {...props}>
                    <Stack sx={{ gap: 4, alignItems: "center", textAlign: 'center' }}>
                        {children}
                        <HomeTitle>{title}</HomeTitle>
                        <BlueDivider variant="middle" />
                        <HomeSubTitle>{subTitle}</HomeSubTitle>
                    </Stack>
                    {matches ? <ButtonGroup>
                        <NavLink to={PROJECTS_PATH}>
                            <CustomeButton>
                                {t("common.projects")}
                            </CustomeButton>
                        </NavLink>
                        <NavLink to={RESUME_PATH}>
                            <CustomeButton variant="outlined">{t("common.resume")}</CustomeButton>
                        </NavLink>
                    </ButtonGroup> : null}

                </HomeCard>
            );
        case "resume":
            return (
                <ResumeCard>
                    <ResumeCardContent>
                        <Stack sx={{ gap: "10px" }}>
                            <CustomeTypography variant="title">{title}</CustomeTypography>
                            <CustomeTypography variant="subtitle">{subTitle}</CustomeTypography>
                            <CustomeTypography >{companyName}</CustomeTypography>
                        </Stack>
                        <CustomeTypography>{children}</CustomeTypography>
                    </ResumeCardContent>
                </ResumeCard>
            );
        case "resumeList":
            return (
                <ResumeCard>
                    <CardContent
                        sx={{
                            whiteSpace: "pre-line",
                            lineHeight: 1.5,
                        }}
                    >
                        {/* <List>{Skillslist(children)}</List> */}
                        {children}
                    </CardContent>
                </ResumeCard>
            );
        default:
            return (
                <DefaultCard {...props}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={img}
                        title={imgTitle}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                        >
                            {subTitle}
                        </Typography>
                    </CardContent>
                </DefaultCard>
            );
    }
}
