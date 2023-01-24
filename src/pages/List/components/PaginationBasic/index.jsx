import Pagination from 'react-bootstrap/Pagination';
import { PaginationContainer } from './styled';
import { CaretRight, CaretLeft } from 'phosphor-react'


export const PaginationBasic = ({ currentPage, total, setCurrentPage }) => {
    let items = [];

    for (let number = currentPage; number <= currentPage + 4; number++) {
        items.push(
            <span key={number}>
                <Pagination.Item onClick={() => setCurrentPage(number)}>
                    {number}
                </Pagination.Item>
            </span>

        );
    }
    return (

        <PaginationContainer>
            {currentPage !== 1 ? (
                <div onClick={() => setCurrentPage(currentPage-1)}>
                    <CaretLeft size={20}  />
                </div>
            ): <></>}

            {items}
            
            <div onClick={() => setCurrentPage(currentPage+1)}>
                <CaretRight size={20} />
            </div>
            <div onClick={() => setCurrentPage(total)}>
                <Pagination.Item >Última</Pagination.Item>
            </div>


        </PaginationContainer>

    )
}


