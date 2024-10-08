import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack, Button } from "@mui/material";
import {
    Header,
    SubHeader,
    ContentContainer,
    HeaderContainer,
    CardsContainer,
    List,
} from "./styles";
import Cards from "../../components/Cards";
import CustomeButton from "../../components/CustomeButton";

export default function Resume() {
    const { t, i18n } = useTranslation();

    const Skillslist = (listitem) => {
        const list = listitem.split(", ");
        return list.map((str, index) => <li key={index}>{str}</li>);
    };

    const handleDownload = () => {
        const downloadUrl =
            "https://drive.google.com/u/1/uc?id=1zk2mLMBSRq_nuWBSM0KOpsKuByQQ_VTt&export=download";
        window.open(downloadUrl);
    };
    return (
        <Stack sx={{ background: "#F6F4F0", paddingBottom: "5rem" }}>
            <Header>Resume</Header>
            <ContentContainer>
                <HeaderContainer>
                    <SubHeader>Work Experience</SubHeader>
                    <Stack sx={{ justifyContent: "center" }}>
                        <CustomeButton onClick={handleDownload}>
                            Download CV
                        </CustomeButton>
                    </Stack>
                </HeaderContainer>

                <CardsContainer>
                    <Cards
                        title="2022 - 2024"
                        subTitle="Game Developer"
                        companyName="Chaingate AI Limited"
                        variant="resume"
                    >
                        {t("chaingateAiDersction")}
                    </Cards>
                    <Cards
                        title="2019"
                        subTitle="Internship"
                        companyName="HULU Cultural Company"
                        variant="resume"
                    >
                        {t("huluCulturalDersction")}
                    </Cards>
                </CardsContainer>
                <SubHeader>Educational</SubHeader>
                <CardsContainer>
                    <Cards
                        title="2022"
                        subTitle="Hong Kong Metropolitan University"
                        companyName="Bachelor of Arts with Honours in Computing and Interactive Entertainment "
                        variant="resume"
                    >
                        {t("MetropolitanUniversity")}
                    </Cards>
                    <Cards
                        title="2020"
                        subTitle="Hong Kong Institute of Vocational Education (Sha Tin)  "
                        companyName="Higher Diploma in Multimedia"
                        variant="resume"
                    >
                        {t("IVE")}
                    </Cards>
                </CardsContainer>
                <SubHeader>Skills</SubHeader>
                <Cards variant="resumeList">
                    <SubHeader>Technical Skills</SubHeader>
                    <List>{Skillslist(t("technicalSkill"))}</List>
                    <SubHeader>Languages</SubHeader>
                    <List>{Skillslist(t("languagesSkill"))}</List>
                </Cards>
            </ContentContainer>
        </Stack>
    );
}
