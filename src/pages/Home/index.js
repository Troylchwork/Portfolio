import React from "react";
import { useTheme, useMediaQuery, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cards from "../../components/Cards";
import CustomeButton from "../../components/CustomeButton";
import ThreeScene from "../../components/HeadsetModel";
import { BackgroundContainer, BackgroundLeft, BackgroundRight, ModelContainer, ButtonGroup, CardContent } from "./styles";
import { PROJECTS_PATH, RESUME_PATH } from "../../constants/paths";
import headicon from "../../assets/images/headicon.jpg";
import { useTranslation } from "react-i18next";

export default function Home() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));
    const { t } = useTranslation();

    return matches ? (
        <BackgroundContainer>
            <BackgroundLeft></BackgroundLeft>
            <BackgroundRight>
                <Cards variant="home" title="Troy Leung" subTitle={`${t("common.gameDeveloper")}\n${t("common.frontendDeveloper")}`}>
                    <ModelContainer>
                        <ThreeScene />
                    </ModelContainer>
                </Cards>
                <CardContent>
                    <Typography variant="h1" gutterBottom>
                        {t("home.title")}
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        {t("home.subTitle")}
                    </Typography>
                    <ButtonGroup>
                        <NavLink to={PROJECTS_PATH}>
                            <CustomeButton>{t("common.projects")}</CustomeButton>
                        </NavLink>
                        <NavLink to={RESUME_PATH}>
                            <CustomeButton variant="outlined">{t("common.resume")}</CustomeButton>
                        </NavLink>
                    </ButtonGroup>

                    <Typography variant="body" gutterBottom>
                        {t("home.desc")}
                    </Typography>
                </CardContent>
            </BackgroundRight>
        </BackgroundContainer>
    ) : (
        <BackgroundContainer>
            <Cards variant="home" title="Troy Leung" subTitle={`${t("common.gameDeveloper")}\n${t("common.frontendDeveloper")}`}>
                <ModelContainer>
                    <img src={headicon} alt="headicon"></img>
                </ModelContainer>
            </Cards>
        </BackgroundContainer>
    );
}
