import React from "react";
import { Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
    Background,
    BGTitle,
    BGSubTitle,
    ProjectContainer,
    Title,
} from "./styles";
import ProjectCard from "../../components/ProjectCard";
import InfoCard from "../../components/InfoCard";
import {
    MODEL_PATH,
    VISUALEFFECTS_PATH,
    GAMESYSTEM_PATH,
    MORE_PATH,
} from "../../constants/paths";
import {
    donut,
    forest,
    forest3,
    dashboardExample,
    arGameExample,
    voiceChatExample,
    gameS,
    game2D,
} from "../../assets/images";

export default function Projects() {
    const { t, i18n } = useTranslation();
    return (
        <Background>
            <img
                src={forest3}
                alt="iamge"
                width={"100%"}
                style={{ objectFit: "cover", height: "1050px" }}
            />
            <BGTitle>Make to Be Played</BGTitle>
            <BGSubTitle>Game and Web Projects</BGSubTitle>
            <ProjectContainer>
                <ProjectCard title="Modling" path={MODEL_PATH} img={donut} />
                <ProjectCard
                    title="Visual Effects"
                    path={VISUALEFFECTS_PATH}
                    img={forest}
                />
                <ProjectCard
                    title="Game System"
                    path={GAMESYSTEM_PATH}
                    img={gameS}
                />
                <ProjectCard title="More" path={MORE_PATH} img={game2D} />
            </ProjectContainer>
            <Title>Website</Title>
            <Stack sx={{ alignItems: "center", rowGap: "40px", pt: "40px" }}>
                <InfoCard
                    title="Rebuild Website"
                    subTitle="GameDeveloper"
                    img={dashboardExample}
                >
                    {t("rebuildWebsite")}
                </InfoCard>
                <InfoCard
                    title="Web AR Game"
                    subTitle="GameDeveloper"
                    direction="right"
                    img={arGameExample}
                >
                    {t("webGame")}
                </InfoCard>
                <InfoCard
                    title="Web Voice Chat"
                    subTitle="GameDeveloper"
                    img={voiceChatExample}
                >
                    {t("webVoiceChat")}
                </InfoCard>
            </Stack>
        </Background>
    );
}
