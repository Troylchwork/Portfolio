import React from "react";
import { CardActionArea, CardMedia } from "@mui/material";
import { Title, GradientShadow, SubTitle, CustomCard } from "./styles";
import { useNavigate } from "react-router-dom";

export default function ProjectCard({ title, subTitle = "", path = "", img }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`${path}`);
    };
    return (
        <CustomCard>
            <CardActionArea onClick={handleClick} sx={{ height: "100%" }}>
                <Title>{title}</Title>
                <SubTitle>{subTitle}</SubTitle>
                <GradientShadow />
                <CardMedia
                    component="img"
                    image={img}
                    alt="img1"
                    title="ABC"
                    sx={{
                        transition: "all 0.35s ease-in-out",
                        height: "100%",
                    }}
                />
            </CardActionArea>
        </CustomCard>
    );
}
