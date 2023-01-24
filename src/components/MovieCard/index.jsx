import { MovieCardContainer } from "./styled"
import { POSTER_PATH } from "../../services/api"
import { dateFormatter } from "../../utils/formatter"
import { goToDetailsPage } from "../../router/coordinator"
import { useNavigate } from 'react-router-dom'


export const MovieCard = ({ title, image, release_date, id}) => {
   const date = dateFormatter(release_date)
    const navigate = useNavigate()

    return(
        <MovieCardContainer onClick={() => goToDetailsPage(navigate, id)}>
            <img src={`${POSTER_PATH}/${image}` }/>
            <h5>{title}</h5>
            <p>{date}</p>
        </MovieCardContainer>
    )
}