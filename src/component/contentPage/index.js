import React, { useRef, useState } from "react";
import { ContentWrapper, Item, ItemWrapper } from "./style";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getChapterCount } from "../../application/ComicDetails/store/actionCreators";
import LazyLoad from "react-lazyload";
function ContentPage(props) {

    const { contentData } = props;
    const { detailData } = props;
    const { currentChapter } = useSelector((state) => {
        return {
            currentChapter: state.detail.chapterCount
        }
    })
    console.log('当前章节为 ' + currentChapter)
    const dispatch = useDispatch();

    const jump = useNavigate();

    const comicId = detailData.comicId;
    const back = () => {
        jump(`/detail/${comicId}`)
    }
    const pre = () => {
        if (currentChapter === 0) {
            alert('已是第一章')
        } else {
            const currentIndex = currentChapter - 1;
            const id = detailData.chapterList[currentIndex].chapterId;
            dispatch(getChapterCount(currentIndex))
            jump(`/content/${id}`);
            window.opener.location.href = window.opener.location.href;
        }
    }
    const next = () => {
        if (currentChapter === (detailData.chapterList.length - 1)) {
            alert('已是最后一章')
        } else {
            const currentIndex = currentChapter + 1;
            console.log(currentIndex);
            const id = detailData.chapterList[currentIndex].chapterId;
            console.log(id)
            dispatch(getChapterCount(currentIndex))
            jump(`/content/${id}`);
            window.opener.location.href = window.opener.location.href;
        }
    }

    return (
        <ContentWrapper>
            <div className="jump">
                <span onClick={() => { pre() }}>上一章</span>
                <span onClick={() => { back() }}>目录</span>
                <span onClick={() => { next() }}>下一章</span>
            </div>
            <ItemWrapper>
                {
                    contentData.map((item) => {
                        return (
                            <Item>
                                <LazyLoad offset={100} once={true} placeholder={<img width="100%" height="100%" src={require('../../assets/load.webp')} />}>
                                    <img src={item} alt={item} ></img>
                                </LazyLoad>

                            </Item>
                        )
                    })
                }
            </ItemWrapper>
            <div className="jump">
                <span onClick={() => { pre() }}>上一章</span>
                <span onClick={() => { back() }}>目录</span>
                <span onClick={() => { next() }}>下一章</span>
            </div>
        </ContentWrapper>
    )
}
export default ContentPage;