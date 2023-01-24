import { TrailerContainer } from "./styled"


export const MovieTrailer = ({ data }) => {
    return (
        <>
            {data && data.video ? (
                <TrailerContainer>
                    <h2>Trailer</h2>
                    <video controls>
                        <source src="{data.video}" type="video/mp4"/>
                    </video>
                </TrailerContainer>)
                :
                <></>
            }
        </>
    )
}