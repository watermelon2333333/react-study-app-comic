import styled from 'styled-components';
import style from '../../assets/global-style'
export const Wrapper = styled.div`
    max-width: 35%;
    float: left;
    background-color: #333;
   
    
    .title{
        font-weight: 700;
        padding-left: 6px;
        font-size: 20px;
        line-height: 60px;
        color:white;
    }
`;
export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #444;
 `;
export const Item = styled.div`
    position: relative;
    max-width:98%;
    height: 10%;
    transform: 1s;
    font-size: 14px;
    padding-left: 10px;
    img{
        height: 100%;
        width: 100%;
        border-radius: 10px;
    }
    .content{
        display: flex;
        margin-top: 15px;
        .left_column{
            float: left;
            width: 30%;
        }
        .right_column{
            padding-left: 10px;
            float: left;
            width: 70%;
            background-color: #444;
            display: flex;
            flex-direction: column;
            color:white;
            vertical-align: middle;
            .inside{
                margin-top:10px;
            }
            .describe{
                font-size: 1em;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .name{
                font-size: 1.25em;
            }
            .author{
                font-size: 1.1em;
            }
        }
    }
  
 `;