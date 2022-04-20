import styled from 'styled-components'
export const ContentWrapper = styled.div`
    margin-top: 25px;
    .jump{
        /* background-color: white; */
        margin: 20px;
        text-align: center;
        span{
            background-color: yellow;
            margin: 25px;
            font-size: 1.25rem;
            border: 1px solid black;
            border-radius:5px;
            color: white;
            background-color: #e40b21;
        }
        span:hover{
            cursor: pointer;
            background-color: wheat;
            color: black;
        }
    }
`;
export const ItemWrapper = styled.div`
    width: 60%;
    margin: auto;
    margin-top: 10px;
`;
export const Item = styled.div`
    margin-top: 0;
    /* margin-top: 0 ; */
    color: gray;
    img{
        height:100%;
        width: 100%;
    }
`;