import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details } from '../pages/Detais'
import { List } from '../pages/List'


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<List />}/>
                <Route path="/movie/:id" element={<Details />}/>
            </Routes>
        </BrowserRouter>
    )
}