import { ButtonContainer, GenreButton } from "./styled"
import { useState } from 'react'
import { XCircle } from "phosphor-react"




export const Button = ({ genre, toggleGenreById, selected }) => {
   

    return(
        <ButtonContainer selected={selected} onClick={toggleGenreById}>
            <GenreButton selected={selected}>{genre}</GenreButton>
            <span>
                <XCircle size={20} selected={selected} weight='fill'/>
            </span>
            
        </ButtonContainer>
        
    )
}