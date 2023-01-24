import { ListContainer } from "./styled"
import { MovieCard } from '../../components/MovieCard'
import { Header } from "../../components/Header"
import { FilterBanner } from "./components/FilterBanner"
import { useState } from "react"
import { useRequestData } from "../../hooks/useRequestData"
import { PaginationBasic } from "./components/PaginationBasic"


export const List = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, error, loading, getData] = useRequestData('/movie/popular', currentPage)
    const [genreData, genreError, genreLoading, genreGetData] = useRequestData('genre/movie/list')
    const [genreIds, setGenreIds] = useState([])
    

    const toggleGenreById = (id) => {
        let genreFilterActive = genreIds.indexOf(id)

        if (genreFilterActive === -1) {
            setGenreIds([...genreIds, id])
        } else {
            let removeGenre = genreIds.filter((genre) => genre !== id)
            setGenreIds(removeGenre)

        }

    }


    const filterMoviesByGenre = (movie) => {
        if (genreIds.length !== 0){
            return movie.genre_ids.map((id) => genreIds.includes(id)).reduce((current, previous) => current || previous, false)
        } else {
            return movie
        }
    }


    return (
        <>
            <Header />
            { genreData && <FilterBanner toggleGenreById={toggleGenreById} genreData={genreData.genres} genreIds={genreIds}/>}
            { data &&
                <ListContainer>
                    { data.results
                        .filter(filterMoviesByGenre)
                        .map((movie) => {
                            return <MovieCard key={movie.id} id={movie.id} image={movie.poster_path} title={movie.title} release_date={movie.release_date} />
                        })
                    }


                </ListContainer>
            }
            {data && <PaginationBasic currentPage={data.page} setCurrentPage={setCurrentPage} total={data.total_pages} />}
        </>

    )
}