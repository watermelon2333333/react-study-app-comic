import styled from 'styled-components';

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    text-align: center;
    background-color: #333;
    span{
        color: white;
        font-size: 70px;
        font-family: 'KaiTi';
    }
   

`
export const Tab = styled.div`
  
    display: flex;
    flex-direction: row;
    background-color: #333;
    text-decoration: none;
    overflow: hidden;
    align-items: center;
    .link{
        float: left;
        padding: 12px 10px;
        
        text-decoration: none;
        color: white;
        font-size: 30px;
        font-family: 'KaiTi';
    }
    .link:hover{
        background-color: #444;
    }
`
export const Content = styled.div`
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #333;
    }
`