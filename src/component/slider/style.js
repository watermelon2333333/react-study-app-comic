import styled from 'styled-components';

export const Banner = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: auto;
    background-color: #444;
    text-align: center;
    .before{
        position: absolute;
        top: 0;
        height: 60%;
        width: 100%;
        background-color: #333;
    }
    .slider-container{
        position: relative;
        width: 100%;
        height: 300px;
        overflow: hidden;
        margin:auto;
        .slider-nav{
            position: absolute;
            display: block;
            width: 100%;
            height: 100%;
        }
        .swiper-pagination-bullet-active {
            background-color: red;
        }
    }
    
`