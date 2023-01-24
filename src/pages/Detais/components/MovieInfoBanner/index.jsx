import { POSTER_PATH } from "../../../../services/api"
import { ActorsContainer, BannerContainer, EvaluationContainer, InfosContainer, MovieInformation, SinopseContainer } from "./styled"
import { detailsDateFormatter } from "../../../../utils/formatter"
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react"




export const MovieInfoBanner = ({ data, castData, releaseData }) => {
    const genreList = (list) => {
        return list.map((genre) => genre.name)
    }

    const getCertification = () => {
        return releaseData.results
            .filter((result) => result.iso_3166_1 === 'BR')
            .map(BR => BR.release_dates[0].certification)

    }

    const getRuntime = (runtime) => {
        const movieDurationHours = (runtime / 60).toFixed()
        const movieDurationMinutes = runtime % 60

        return `${movieDurationHours}h ${movieDurationMinutes}min`
    }
    
    return (
        <BannerContainer>
                <img src={`${POSTER_PATH}/${data.poster_path}`} />
                <InfosContainer>
                    <h2>{data.title} ({new Date(data.release_date).getFullYear()})</h2>
                    <MovieInformation>
                        <span>{getCertification()} anos &#9679;</span>
                        
                        <span>{detailsDateFormatter(data.release_date)} &#9679;</span>
                        <span> {genreList(data.genres).join(', ')} &#9679;</span>
                        <span>{getRuntime(data.runtime)}</span>
                    </MovieInformation>
                    <EvaluationContainer>
                        <CircularProgress value={(data.vote_average * 10).toFixed()} color='#14FF00' backgroundColor='rgba(255, 255, 255, 0.1)' borderRadius='100px' width='45px' height='45px'>
                            <CircularProgressLabel color='#14FF00' alignContent='center' justifyContent='center'>{(data.vote_average * 10).toFixed()}%</CircularProgressLabel>
                        </CircularProgress>
                        <p>Avaliação dos usuários</p>
                    </EvaluationContainer>
                    <SinopseContainer>
                        <h4>Sinopse</h4>
                        <p>{data.overview}</p>
                    </SinopseContainer>
                    <ActorsContainer>
                        {castData.cast.filter((actor) => {
                            return castData.cast.indexOf(actor) < 5
                        })
                            .map((cast) => {
                                return (
                                    <span key={cast.cast_id}>
                                        <h6>{cast.name}</h6>
                                        <p>{cast.character}</p>
                                    </span>
                                )
                            })}
                    </ActorsContainer>
                </InfosContainer>
            </BannerContainer>
    )
}