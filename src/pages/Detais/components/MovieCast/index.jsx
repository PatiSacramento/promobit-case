import { POSTER_PATH } from "../../../../services/api"
import { CastContainer } from "./styled"
import { ActorCard } from "../ActorCard"




export const MovieCast = ({ castData }) => {
    return (

        <CastContainer>
            <h2>Elenco original</h2>
            <div>{castData.cast.map((actor) => {
                return (
                    <ActorCard key={actor.id} actorImage={`${POSTER_PATH}/${actor.profile_path}`} name={actor.name} character={actor.character} />
                )
            })}</div>
        </CastContainer>
    )
}