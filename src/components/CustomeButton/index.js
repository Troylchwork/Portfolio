import { DefaultButton } from "./styles";

export default function CustomeButton({
    variant = "contained",
    children,
    ...props
}) {
    switch (variant) {
        case "outlined":
            return (
                <DefaultButton variant="outlined" {...props}>
                    {children}
                </DefaultButton>
            );
        default:
            return (
                <DefaultButton variant="contained" {...props}>
                    {children}
                </DefaultButton>
            );
    }
}
