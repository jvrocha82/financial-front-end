import React from "react";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";

import ButtonHeader from "../ButtonHeader"
import ProfileIcon from "../ProfileIcon"
const Header = ({ Text, Path }) => {
    const navigate = useNavigate();
    return (
        <C.Header onClick={() => [navigate(Path)]}>
            <C.LeftSide>aa</C.LeftSide>
            <C.HeaderCenter>
                <ButtonHeader Text="Home" />
                <ButtonHeader Text="Invest" />
                <ButtonHeader Text="Depost" />
                <ButtonHeader Text="Text" />
                <ButtonHeader Text="Text" />
        
            </C.HeaderCenter>

            <C.RightSide>
                <ProfileIcon/>
            </C.RightSide>
        </C.Header>
    )
}
export default Header;