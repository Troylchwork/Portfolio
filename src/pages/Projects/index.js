import React from "react";
import { Stack, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Background, BGTitle, BGSubTitle, ProjectContainer, BackgroundImg, InfoCardContainer } from "./styles";
import ProjectCard from "../../components/ProjectCard";
import InfoCard from "../../components/InfoCard";
import { MODEL_PATH, VISUALEFFECTS_PATH, GAMESYSTEM_PATH, MORE_PATH, WEBSITE_PATH } from "../../constants/paths";
import { donut, forest, forest3, dashboardExample, arGameExample, voiceChatExample, gameS, game2D } from "../../assets/images";
import CustomeTypography from "../../components/CustomeTypography";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <Background>
            <BackgroundImg src={forest3} alt="iamge" />
            <BGTitle>Make to Be Played</BGTitle>
            <BGSubTitle>{t("projects.subTitle")}</BGSubTitle>
            <Container maxWidth="xl">
                <ProjectContainer>
                    <ProjectCard title={t("common.model")} path={MODEL_PATH} img={donut} />
                    <ProjectCard title={t("common.visualEffect")} path={VISUALEFFECTS_PATH} img={forest} />
                    <ProjectCard title={t("common.gameSystem")} path={GAMESYSTEM_PATH} img={gameS} />
                    <ProjectCard title={t("common.more")} path={MORE_PATH} img={game2D} />
                    <ProjectCard title={t("common.website")} path={WEBSITE_PATH} img={game2D} />
                </ProjectContainer>
                {/* <CustomeTypography variant="h1" sx={{ pt: 2, m: "0rem 2rem" }}>
                    Website
                </CustomeTypography> */}
                <InfoCardContainer>
                    <InfoCard title={t("projects.rebuildWebsite")} subTitle={t("common.frontendDeveloper")} img={dashboardExample}>
                        {t("projects.rebuildWebsiteDesc")}
                    </InfoCard>
                    <InfoCard title={t("projects.webGame")} subTitle={t("common.gameDeveloper")} direction="right" img={arGameExample}>
                        {t("projects.webGameDesc")}
                    </InfoCard>
                    <InfoCard title={t("projects.webVoiceChat")} subTitle={t("common.gameDeveloper")} img={voiceChatExample}>
                        {t("projects.webVoiceChatDesc")}
                    </InfoCard>
                </InfoCardContainer>
            </Container>
        </Background>
    );
}
