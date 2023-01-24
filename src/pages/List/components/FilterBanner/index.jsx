import { Button } from "../Button"
import { BannerContainer } from "./styled"



export const FilterBanner = ({ toggleGenreById, genreData, genreIds }) => {

    const hasGenre = (id) => {
        return genreIds.includes(id) 
    }
   
    return(
        <BannerContainer>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>

            
            <p>FILTRE POR: </p>
            
            <div> 
                { genreData.map((genre) => {
                    return <Button key={genre.id} genre={genre.name} toggleGenreById={() => toggleGenreById(genre.id)} selected={hasGenre(genre.id)}/>
                })}   
            </div>
        </BannerContainer>
    )
}