import { Header } from "../../components/Header"
import { useRequestData } from "../../hooks/useRequestData"
import { useParams } from 'react-router-dom'


import { MovieInfoBanner } from "./components/MovieInfoBanner"
import { MovieCast } from "./components/MovieCast"
import { MovieTrailer } from "./components/MovieTrailer"
import { MovieRecomendations } from "./components/MovieRecomendations"

export const Details = () => {
    const { id } = useParams()

    const [data, error, loading, getData] = useRequestData(`movie/${id}`)
    const [releaseData, releaseError, releaseLoading, releaseGetData] = useRequestData(`movie/${id}/release_dates`)
    const [castData, castError, castLoading, castGetData] = useRequestData(`movie/${id}/credits`)
    const [similarData, similarError, similarLoading, similarGetData] = useRequestData(`movie/${id}/similar`)

    return (
        <>

            {data && castData && similarData &&
                <>
                    <Header />
                    <MovieInfoBanner
                        data={data}
                        castData={castData}
                        releaseData={releaseData}
                    />

                    <MovieCast castData={castData} />

                    <MovieTrailer data={data} />

                    <MovieRecomendations similarData={similarData} />
                </>}
        </>

    )
}