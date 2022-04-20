import styled from 'styled-components'

export const Content = styled.div`
`;
export const SearchTab = styled.div`
    text-align: center;
    vertical-align: middle;
    .input{
        height: 30px;
        width: 20%;
        border-radius: 5px;
    }
    .searchBtn{
        margin-left: 2px;
        border: 0;
        height: 35px;
        width: 5%;
        border-radius: 5px;
        background-color: #555;
        color: white;
        :hover{
            background-color: white;
            color: black;
        }
    }
`