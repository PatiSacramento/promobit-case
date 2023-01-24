import { MovieCard } from "../../../../components/MovieCard"
import { RecomendationsContainer } from "./styled"


export const MovieRecomendations = ({ similarData }) => {

    const getRecomendations = (list) => {
        const someRecomendations = list.slice(0, 5)
        return someRecomendations
    }

    return (
        <RecomendationsContainer>
            <h2>Recomendações</h2>
            <span>
                {getRecomendations(similarData.results).map((recomendation) => {
                    return (
                        <MovieCard key={recomendation.id} id={recomendation.id} image={recomendation.poster_path} title={recomendation.title} release_date={recomendation.release_date} />
                    )
                })}
            </span>
        </RecomendationsContainer>
    )
}