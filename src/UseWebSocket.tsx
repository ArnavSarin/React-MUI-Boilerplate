import { useEffect } from 'react';
import useWebSocket, { ReadyState } from "react-use-websocket"

export function useChatWebSocket() {

    const WS_URL = "ws://localhost:8000"
    const { sendMessage, lastMessage, sendJsonMessage, lastJsonMessage, readyState} = useWebSocket(
        WS_URL,
        {
            share: false,
            shouldReconnect: () => true,
        },
    )

    // Run when the connection state (readyState) changes
    useEffect(() => {
        console.log("Connection state changed")
        if (readyState === ReadyState.OPEN) {
            sendJsonMessage({
                event: "subscribe",
                data: {
                    channel: "general-chatroom",
                },
            })
        }
    }, [readyState])

    useEffect(() => {
        console.log(`Got a new JSON Message: ${lastJsonMessage?.data}`)
    }, [lastJsonMessage])

    useEffect(() => {
        console.log(`Got a new message: ${lastMessage?.data}`)
    }, [lastMessage])

    return {sendMessage, lastMessage};
}

