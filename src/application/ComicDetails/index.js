import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { isEmptyObject } from "../../api/util";
import DetailPage from "../../component/detailPage";
import { getDetailData } from './store/actionCreators'

function ComicDetails() {
    //获取跳转的漫画详细Id
    const comicId = useParams().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getDetailData(comicId))
    }, [comicId])

    const { detailData } = useSelector((state) => {
        return {
            detailData: state.detail.detailData,
        }
    })
    const detailDataJS = detailData ? detailData : [];
    return (
        <div>
            {!isEmptyObject(detailDataJS) ?
                (
                    <DetailPage detailData={detailDataJS}></DetailPage>
                ) : null
            }

        </div>
    )
}
export default ComicDetails;
