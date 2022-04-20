import styled from 'styled-components';
import style from '../../assets/global-style'
export const ListWraper = styled.div`
    padding: 0 20px;
    /* background-color: white; */
    .title{
        font-weight: 700;
        padding-left: 3%;
        font-size: 20px;
        line-height: 60px;
        color:white;
    }
`;

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #444;
    
`;
export const ListItem = styled.div`
    position: relative;
    width:22%;
    margin-left:5px;
    margin-top: 10px;
    font-size: 20px;
    :hover{
        cursor: pointer;
    }
    .img_wrapper{
        /* .decorate{
            position: absolute;
            top:0 ;
            width: 100%;
            height: 35px;
            background: linear-gradient (hsla (0,0%,43%,.4),hsla (0,0%,100%,0));
        } */
        position: relative;
        height: 0;
        padding-bottom: 125%;
        /* .play_count{
            position: absolute;
            right: 50px;
            top: 2px;
            font-size:${style['font-size-s']} ;
            line-height: 17px;
            color: ${style['font-color-light']};
            .play{
                vertical-align: top;
            }
        } */
        img{
            position: absolute;
            border-radius:10px;
            width: 100%;
            height: 100%;
        }
    }
    .desc{
        font-size: 15px;
        overflow: hidden;
        width: 98%;
        margin-top:2px;
        padding: 0 2px;
        height: 50px;
        text-align: center;
        line-height: 1.4;
        color: white;
    }
`