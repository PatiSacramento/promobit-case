import { HeaderContainer } from "./styled"
import logo from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom"




export const Header = () => {
    const navigate = useNavigate()
    return(
        <HeaderContainer>
            <img src={logo} alt="TMDB logo" onClick={() => navigate("/")}/>
        </HeaderContainer>
    )
}