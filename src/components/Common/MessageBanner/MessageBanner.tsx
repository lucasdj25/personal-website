import React from "react"
import "./MessageBanner.css"

interface MessageBannerProps {
    message: string
    error: boolean
    close: () => void
}

function MessageBanner({ message, error, close }: MessageBannerProps){
    return (
        <div className={`contact-banner ${error ? "error": "success"}`}>
            {message}
            <div className="banner-exit" onClick={close}>X</div>
        </div>
    )
}

export default MessageBanner