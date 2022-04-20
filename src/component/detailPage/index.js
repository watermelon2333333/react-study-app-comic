import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { ChapterList, ChapterListItem, DetailWrapper, Detail_left, Detail_right } from "./style";
import {getChapterCount} from '../../application/ComicDetails/store/actionCreators';
function DetailPage(props) {
    
    const { detailData } = props;
    const history = useNavigate();
    const dispatch = useDispatch();

    const enterContent = (id,item)=>{
        const currentChapter = detailData.chapterList.indexOf(item);
        console.log(currentChapter)
        dispatch(getChapterCount(currentChapter));
        history(`/content/${id}`)
    }
    return (
        <DetailWrapper>
            <Detail_left>
                <h1 className="title">《{detailData.title}》</h1>
                <span className="describe">漫画简介:{detailData.descs}</span>
                <button className="startRead">开始阅读</button>
                <span className="chapter">章节列表</span>
                <ChapterList>
                    {
                        detailData.chapterList.map((item) => {
                            return (
                                <ChapterListItem key={item.index} onClick={()=>enterContent(item.chapterId,item)}>
                                    <div className="chapterItem">
                                        <span>{item.title}</span>
                                    </div>
                                </ChapterListItem>
                            )
                        })
                    }
                </ChapterList>
            </Detail_left>

            <Detail_right>
                <div className="name row">
                    <span className="left">漫画名称</span>
                    <span className="right">{detailData.title}</span>
                </div>
                <div className="image row">
                    <span className="left">封面图片</span>
                    <img src={detailData.cover} className="right"></img>
                </div>
                <div className="author row">
                    <span className="left">漫画作者</span>
                    <span className="right">{detailData.author}</span>
                </div>
                <div className="type row">
                    <span className="left">作品类型</span>
                    <span className="right">{detailData.comicType}</span>
                </div>
                <div className="update row">
                    <span className="left">最近更新</span>
                    <span className="right">{detailData.updateTime}</span>
                </div>
            </Detail_right>
        </DetailWrapper>
    )
}
export default DetailPage;