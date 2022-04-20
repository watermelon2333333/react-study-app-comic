import styled from 'styled-components'
export const DetailWrapper = styled.div`
    color: white;
    margin: 10px;
    padding: 15px;
    overflow: hidden;
`

export const Detail_left = styled.div`
float: left;
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 60%;
    background-color: #444;
    .title{
        font-size: 20px;
        font-weight: bolder;
    }
    .describe{
        margin-top: 15px;
    }
    .startRead{
        width: 60%;
        margin-top: 15px;
        background-color: #e40b21;
        border: 0;
        border-radius:5px;
        color: white;
        cursor: pointer;
    }
    .chapter{
        margin-top: 25px;
        color: #e40b21;
    }
`;
export const Detail_right = styled.div`
    float: left;
    width: 35%;
    padding: 10px;
    background-color: #444;
    display: flex;
    flex-direction: column;
    margin-left:15px;
    img{
        height: 100%;
        width: 100%;
    }
    .image{
        height: 60%;
    }
    .row{
        display: flex;
        flex-direction: row;
        margin: 10px 0;
    }
    .right{
        margin: auto;
        width: 72%;
        margin-left: 8px;
        font-size:16px ;
    }
    .left{
        text-align: center;
        font-size: 20px;
        width: 28%;
        font-weight: bolder;
    }
`;
export const ChapterList = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap ;
`
export const ChapterListItem = styled.div`
    margin: 3px;
    width: 120px;
    height: 35px;
    border: 1px solid;
    border-radius: 5px;
    border-color:#17a2b8;
    color: #17a2b8;
    background-color: #333;
    cursor: pointer;
    .chapterItem{
        text-align: center;
    }
    :hover{
        background-color: wheat;
        border-color: #333;
        color: black;
    }

`

