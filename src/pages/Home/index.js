import React from "react";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cards from "../../components/Cards";
import CustomeButton from "../../components/CustomeButton";
import ThreeScene from "../../components/HeadsetModel";
import {
    BackgroundContainer,
    BackgroundLeft,
    BackgroundRight,
    ModelContainer,
    ButtonGroup,
    CardContent,
} from "./styles";
import { PROJECTS_PATH, RESUME_PATH } from "../../constants/paths";

export default function Home() {
    return (
        <BackgroundContainer>
            <BackgroundLeft></BackgroundLeft>
            <BackgroundRight>
                <Cards
                    variant="home"
                    title="Troy Leung"
                    subTitle={`Game Developer\nFrontend Developer`}
                >
                    <ModelContainer>
                        <ThreeScene />
                    </ModelContainer>
                </Cards>
                <CardContent>
                    <Typography variant="h1" gutterBottom>
                        Hello
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        Here's who I am & what I do
                    </Typography>
                    <ButtonGroup>
                        <NavLink to={PROJECTS_PATH}>
                            <CustomeButton sx={{ fontSize: "16px" }}>
                                Projects
                            </CustomeButton>
                        </NavLink>
                        <NavLink to={RESUME_PATH}>
                            <CustomeButton variant="outlined">Resume</CustomeButton>
                        </NavLink>
                    </ButtonGroup>

                    <Typography variant="body" gutterBottom>
                        Seeking a frontend developer position where I can
                        utilize my technical expertise and problem-solving
                        skills to develop innovative solutions that drive
                        business growth and deliver exceptional user
                        experiences.
                    </Typography>
                </CardContent>
            </BackgroundRight>
        </BackgroundContainer>
    );
}
