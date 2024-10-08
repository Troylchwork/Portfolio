import {
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button,
} from "@mui/material";
import { useAlertContext } from "../../context/alertContext";
import { AlertContentText } from "./styles";
export default function AlertDialog() {
    const { isOpen, name, email, subject, message, onClose } =
        useAlertContext();
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>{"Padding Update"}</DialogTitle>
            <DialogContent>
                <AlertContentText>
                    Sorry {name}, this function just for demo now.
                    <br />
                    Here is the info you send
                    <br />
                    <strong>Email:</strong>{email}
                    <br />
                    <strong>{subject}</strong>
                    <br />
                    {message}
                </AlertContentText>
            </DialogContent>
            <DialogActions sx={{ justifyContent: "center" }}>
                <Button onClick={onClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
