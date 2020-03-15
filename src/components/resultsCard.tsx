import React from 'react'
import { useStyletron } from "styletron-react"

export const ResultsCard = () => {

    const [css] = useStyletron()
    const cardParent: string =css({
        width: "100%",
    })
    
    return (
        <div></div>
    )
}