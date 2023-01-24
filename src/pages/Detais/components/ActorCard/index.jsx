import { CardContainer } from "./styled"




export const ActorCard = ({ actorImage, name, character }) => {
    return (
        <CardContainer>
            <img src={actorImage} />
            <h6>{name}</h6>
            <p>{character}</p>
        </CardContainer>

    )
}