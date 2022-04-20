import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ContentPage from "../../component/contentPage";
import { getComicContent } from './store/actionCreator';
import { isEmptyObject } from './../../api/util';
function ComicContent() {

    const id = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComicContent(id));
    }, [id])

    const { contentData, detailData } = useSelector((state) => {
        return {
            contentData: state.content.contentData,
            detailData: state.detail.detailData,
        }
    })
    const contentDataJS = contentData ? contentData : [];
    const detailDataJS = detailData ? detailData : [];
    return (
        <div>
            {
                !isEmptyObject(contentDataJS) ? (
                    <ContentPage
                        contentData={contentDataJS}
                        detailData={detailDataJS}
                    ></ContentPage>
                ) : null
            }
        </div>
    )
}
export default ComicContent;