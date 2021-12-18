import styled from "styled-components";
import * as styleConst from "../../assets/const/const.styles";

export const SvgIcons = styled.svg`
    width:22px;
    height:22px;
    margin:0 auto;
    path{
        transition: all linear 0.2s;
        fill: ${styleConst.colorBody};
    }
    &:hover > path {
        fill: ${styleConst.colorPrimary};

    }
`