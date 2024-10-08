import { Card, CardMedia, Box, Stack } from "@mui/material";
import { forest } from "../../assets/images";
import {
    CustomCard,
    TitleContainer,
    TitleContainerRight,
    Title,
    ColorBlock,
    SubTitle,
} from "./styles";

export default function InfoCard({
    title,
    subTitle = "",
    direction = "left",
    img,
    children,
}) {
    return direction === "left" ? (
        <CustomCard>
            <Box sx={{ width: "50%" }}>
                <TitleContainer>
                    <ColorBlock />
                    <Stack>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                </TitleContainer>
                <Stack sx={{ margin: "3rem" }}>{children}</Stack>
            </Box>
            <CardMedia
                component="img"
                image={img}
                alt="forest"
                title="ABC"
                sx={{ width: "40%" }}
            ></CardMedia>
        </CustomCard>
    ) : (
        <CustomCard>
            <CardMedia
                component="img"
                image={img}
                alt="forest"
                title="ABC"
                sx={{ width: "40%" }}
            ></CardMedia>
            <Box sx={{ width: "50%", textAlign: "end" }}>
                <TitleContainerRight>
                    <Stack>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                    <ColorBlock />
                </TitleContainerRight>
                <Stack sx={{ margin: "3rem" }}>{children}</Stack>
            </Box>
        </CustomCard>
    );
}
