import { useTheme, useMediaQuery, Stack } from "@mui/material";
import { CustomCard, TitleContainer, TitleContainerRight, Title, ColorBlock, SubTitle, CustomCardMedia, CardCotent, CardDesc } from "./styles";

export default function InfoCard({ title, subTitle = "", direction = "left", img, children }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return direction === "left" ? (
        <CustomCard reverse={matches}>
            <CardCotent>
                <TitleContainer>
                    <ColorBlock />
                    <Stack>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                </TitleContainer>
                <CardDesc>{children}</CardDesc>
            </CardCotent>
            <CustomCardMedia component="img" image={img} alt={title} title={title}></CustomCardMedia>
        </CustomCard>
    ) : (
        <CustomCard>
            <CustomCardMedia component="img" image={img} alt={title} title={title}></CustomCardMedia>
            <CardCotent textAlignR={matches}>
                <TitleContainerRight justifyContentR={matches}>
                    <Stack >
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                    </Stack>
                    <ColorBlock />
                </TitleContainerRight>
                <CardDesc>{children}</CardDesc>
            </CardCotent>
        </CustomCard>
    );
}
