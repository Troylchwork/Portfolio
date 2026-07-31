import { Stack, Box, Typography, Accordion, AccordionSummary, AccordionDetails, ImageList, ImageListItem, Container } from "@mui/material";
import CustomeBreadcrumbs from "../../../components/CustomeBreadcrumbs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import itemData from "./data";
import { ImageContainer } from "./styles";
import { useTranslation } from "react-i18next";

export default function Model() {
    const { t } = useTranslation();
    return (
        <Stack sx={{ background: "#F6F4F0", minHeight: "100vh" }}>
            <Container maxWidth="xl">
                <Stack sx={{ margin: "20px" }}>
                    <h1>{t("common.model")}</h1>
                    <CustomeBreadcrumbs name={t("common.model")} />

                    <Stack spacing={3} mt={5}>
                        {itemData.map((category) => (
                            <Accordion
                                key={category.key}
                                defaultExpanded={category.key === "Environment"} // 可選：預設打開第一個
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    sx={{
                                        background: "#ffffff",
                                        borderRadius: 2,
                                        minHeight: 64,
                                        "&.Mui-expanded": { minHeight: 64 },
                                    }}
                                >
                                    <Typography variant="h5" fontWeight="600">
                                        {t(category.i18Key)} ({category.items.length})
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ p: { xs: 2, md: 4 }, background: "#fafafa" }}>
                                    <ImageList
                                        variant="quilted"
                                        cols={4}
                                        gap={20}
                                        sx={{
                                            borderRadius: 2,
                                            overflow: "hidden",
                                            justifyContent: "center",
                                            gridTemplateColumns: {
                                                xs: "repeat(1, 1fr) !important",
                                                sm: "repeat(2, 1fr) !important",
                                                md: "repeat(3, 1fr) !important",
                                                lg: "repeat(auto-fit, minmax(340px, 420px)) !important",
                                            },
                                        }}
                                        rowHeight={240}
                                    >
                                        {category.items.map((item) => (
                                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                                <img
                                                    srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
                                                    src={`${item.img}?w=400&fit=crop&auto=format`}
                                                    alt={item.title}
                                                    loading="lazy"
                                                    style={{
                                                        borderRadius: "12px",
                                                        objectFit: "cover",
                                                        width: "100%",
                                                        height: "100%",
                                                    }}
                                                />
                                                {/* 可選：顯示標題 */}
                                                <Box
                                                    sx={{
                                                        position: "absolute",
                                                        bottom: 0,
                                                        left: 0,
                                                        right: 0,
                                                        background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                                                        color: "white",
                                                        padding: "16px 12px 8px",
                                                        borderRadius: "0 0 12px 12px",
                                                    }}
                                                >
                                                    <Typography variant="subtitle2" fontWeight="500">
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            </ImageListItem>
                                        ))}
                                    </ImageList>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>
                    {/* <ImageContainer>
                    <ImageList variant="quilted" cols={2} gap={40}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </ImageContainer> */}
                </Stack>
            </Container>
        </Stack>
    );
}
