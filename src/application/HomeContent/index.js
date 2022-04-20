import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "../../component/slider";
import ComicList from "../../component/list";
import RankList from "../../component/rankList";
import * as actionTypes from './store/actionCreators';
import { HomeContentStyle,Warn } from "./style";
import { isEmptyObject } from "../../api/util";

function HomeContent() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (!bannerList.length) {
            dispatch(actionTypes.getBannerList());
        }
        if (!recommendList.length) {
            dispatch(actionTypes.getRecommendList());
        }
    }, []);

    const { bannerList, recommendList } = useSelector((state) => {
        return {
            bannerList: state.recommend.bannerList,
            recommendList: state.recommend.recommendList,
        }
    })
    const bannerListJS = bannerList ? bannerList : [];
    const recommendListJS = recommendList ? recommendList : [];

    // console.log(recommendListJS)
    return (
        <div>
            {
                (!isEmptyObject(bannerListJS) && !isEmptyObject(recommendListJS)) ? (
                    <div>
                        <Slider bannerList={bannerListJS} ></Slider>

                        <HomeContentStyle>
                            <ComicList recommendList={recommendListJS} tabName='魔幻'></ComicList>
                            <ComicList recommendList={recommendListJS} tabName='魔幻'></ComicList>
                        </HomeContentStyle>

                        <RankList rankList={recommendListJS} tabName='随便了'></RankList>

                    </div>
                ) : (
                    <Warn>
                        <div className="warn">请求出现错误，请刷新页面</div>
                    </Warn>
                )
            }
        </div>

    )
}
export default React.memo(HomeContent);