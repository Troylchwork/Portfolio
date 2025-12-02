import React from "react";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import {
    ContentContainer,
    HeaderContainer,
    CardsContainer,
    List,
} from "./styles";
import Cards from "../../components/Cards";
import CustomeButton from "../../components/CustomeButton";
import CustomeTypography from "../../components/CustomeTypography";

export default function Resume() {
    const { t } = useTranslation();

    const Skillslist = (listitem) => {
        const list = listitem.split(", ");
        return list.map((str, index) => <li key={index}>{str}</li>);
    };

    return (
        <Stack sx={{ background: "#F6F4F0", paddingBottom: "5rem", alignItems: 'center', '& *': { maxWidth: '1080px' } }}>
            <CustomeTypography variant="h1_center">{t("resume.resume")}</CustomeTypography>
            <ContentContainer>
                <HeaderContainer>
                    <CustomeTypography variant="h2">{t("resume.workExperience")}</CustomeTypography>
                    <Stack sx={{ justifyContent: "center" }}>
                        <a href="https://drive.google.com/u/1/uc?id=1zk2mLMBSRq_nuWBSM0KOpsKuByQQ_VTt&export=download">
                            <CustomeButton>
                                {t("resume.downloadCV")}
                            </CustomeButton>
                        </a>
                    </Stack>
                </HeaderContainer>

                <CardsContainer>
                    <Cards
                        title="2022 - 2024"
                        subTitle={t("common.gameDeveloper")}
                        companyName="Chaingate AI Limited"
                        variant="resume"
                    >
                        {t("resume.chaingateAiDersction")}
                    </Cards>
                    <Cards
                        title="2019"
                        subTitle={t("common.internship")}
                        companyName="HULU Cultural Company"
                        variant="resume"
                    >
                        {t("resume.huluCulturalDersction")}
                    </Cards>
                </CardsContainer>
                <CustomeTypography variant="h2">{t("resume.educational")}</CustomeTypography>
                <CardsContainer>
                    <Cards
                        title="2022"
                        subTitle={t("resume.HKMU")}
                        companyName="Bachelor of Arts with Honours in Computing and Interactive Entertainment "
                        variant="resume"
                    >
                        {t("resume.MetropolitanUniversity")}
                    </Cards>
                    <Cards
                        title="2020"
                        subTitle={t("resume.HKIVE")}
                        companyName="Higher Diploma in Multimedia"
                        variant="resume"
                    >
                        {t("resume.IVEDersction")}
                    </Cards>
                </CardsContainer>
                <CustomeTypography variant="h2">{t("resume.skills")}</CustomeTypography>
                <Cards variant="resumeList">
                    <CustomeTypography variant="h3">{t("resume.technicalSkills")}</CustomeTypography>
                    <List>{Skillslist(t("resume.technicalSkill"))}</List>
                    <CustomeTypography variant="h3">{t("resume.languages")}</CustomeTypography>
                    <List>{Skillslist(t("resume.languagesSkill"))}</List>
                </Cards>
            </ContentContainer>
        </Stack>
    );
}
