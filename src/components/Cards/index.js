import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";
import {
    CardStyles,
    Title,
    SubTitle,
    List,
    DefaultCard,
    HomeCard,
    HomeTitle,
    HomeSubTitle,
    BlueDivider,
} from "./styles";
import { color } from "three/webgpu";
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
    switch (variant) {
        case "home":
            return (
                <HomeCard {...props}>
                    <Stack sx={{ gap: 4, alignItems: "center",textAlign:'center' }}>
                        {children}
                        <HomeTitle>{title}</HomeTitle>
                        <BlueDivider variant="middle" />
                        <HomeSubTitle>{subTitle}</HomeSubTitle>
                    </Stack>
                </HomeCard>
            );
        case "resume":
            return (
                <Card sx={CardStyles}>
                    <CardContent
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "25% 65%",
                            gap: "20px",
                            whiteSpace: "pre-line",
                            lineHeight: 1.5,
                        }}
                    >
                        <Stack sx={{ gap: "10px" }}>
                            <Title>{title}</Title>
                            <SubTitle>{subTitle}</SubTitle>
                            <div>{companyName}</div>
                        </Stack>
                        {children}
                    </CardContent>
                </Card>
            );
        case "resumeList":
            return (
                <Card sx={CardStyles}>
                    <CardContent
                        sx={{
                            whiteSpace: "pre-line",
                            lineHeight: 1.5,
                        }}
                    >
                        {/* <List>{Skillslist(children)}</List> */}
                        {children}
                    </CardContent>
                </Card>
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
