import React, { ReactNode } from "react"
import "./GridContainer.css"

interface GridContainerProps {
    children: ReactNode
}

function GridContainer({ children }: GridContainerProps){
    return (
        <div className="grid-container">{children}</div>
    )
}

export default GridContainer