import styled from 'styled-components';
export const SearchWrapper = styled.div`
    width: 70%;
    margin: auto;
    margin-top: 20px;
`;

export const ResList = styled.div`
    background-color: #444;
    display: flex;
    flex-direction: column;
`;

export const ResItem = styled.div`
    padding: 10px;
    max-width: 98%;
    height:190px ;
    display: flex;
    img{
        width: 130px;
        height: 190px;
        border-radius: 10px;
        opacity: 1.0;
        :hover{
            cursor: pointer;
            opacity: 0.7;
        }
    }
    span{
        margin:5px 0 0 10px;
        line-height: 1.5;
        color: white;
    }
    .left{
        width: 13%;
    }
    .right{
        width: 86%;
        display: flex;
        flex-direction: column;
        .title{
            font-size: 23px;
            font-weight: 700;
            :hover{
                cursor: pointer;
                color:red;
            }
        }
        .author{
            font-style:italic;
            font-size: 18px;
        }
        .describe{
            font-size: 15px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: pre-wrap;
        }
    }
`;
export const PageBtn = styled.div`
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    .btn{
        height: 20px;
        width: 50px;
        font-size: 18px;
        font-weight: bolder;
        margin: 15px;
        background-color: #e40b21;
        color:white;
        text-align: center;
        border-radius: 5px;
        :hover{
            cursor: pointer;
        }
    }
`
export const Warn = styled.div`
    text-align: center;
    .nodata{
        font-size: 30px;
        color: white;
    }
`