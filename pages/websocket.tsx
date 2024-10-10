import * as React from "react";
import {useChatWebSocket} from "../src/UseWebSocket";
import {TextField, Button, Stack} from "@mui/material";
import {useState} from "react";

export default function WebSocket() {
    const {sendMessage, lastMessage } = useChatWebSocket();

    const [message,setMessage] = useState<>("");

    function handleSubmit(event) {
        event.preventDefault();
        sendMessage(message);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing={2} sx={{padding: "5em", width: "50%"}}>
                <TextField
                    type="text"
                    label="Message"
                    variant="outlined"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <Button variant="contained" color="primary" type="submit">
                    Send Message
                </Button>
            </Stack>
        </form>
    );
}