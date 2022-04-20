import React from "react";
import { SearchWrapper, ResList, ResItem, PageBtn, Warn } from './style';
import { getAnySearchDataDispatch } from "../../application/ComicSearch/store/actionCreator";
import LazyLoad from 'react-lazyload';
import { isEmptyObject } from "../../api/util";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
function SearchList(props) {
    const { searchData } = props;
    const total = searchData.count;
    const dispatch = useDispatch();
    const PageNum = () => {
        if (total === undefined) {
            return 1;
        } else if (total <= 10) {
            return 1;
        } else if (total > 10 && (total % 10 === 0)) {
            return total / 10;
        } else {
            return (total - total % 10) / 10 + 1;
        }
    }
    const array = new Array(PageNum());
    for (var i = 0; i < array.length; i++) {
        array[i] = i;
    }

    const { searchType, searchWord } = useSelector((state) => {
        return {
            searchType: state.search.searchType,
            searchWord: state.search.searchWord
        }
    })
    const enterCurrentPage = (searchType, searchWord, page) => {
        dispatch(getAnySearchDataDispatch(searchType, searchWord, page))
    }
    const jump = useNavigate();
    const enterCurrentComic = (id) => {
        jump(`/detail/${id}`)
    }
    return (
        <SearchWrapper>
            <ResList>
                {
                    !isEmptyObject(searchData.data) ? (
                        searchData.data.map((item) => {
                            return (
                                <ResItem>
                                    <div className="left">
                                        <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/load.webp')} />} >
                                            <img src={item.cover} alt={item.cover} onClick={() => { enterCurrentComic(item.comicId) }}></img>
                                        </LazyLoad>
                                    </div>
                                    <div className="right">
                                        <span className="title" onClick={() => { enterCurrentComic(item.comicId) }}>{item.title}</span>
                                        <span className="author">{item.author}</span>
                                        <span className="describe">{item.descs ? item.descs : '暂无说明'}</span>
                                    </div>
                                </ResItem>
                            )
                        })
                    ) : (
                        <Warn>
                            <h1 className="nodata">没有找到“{searchWord}”</h1>
                        </Warn>
                    )
                }
            </ResList>
            <PageBtn>
                {

                    array.map((index) => {
                        return (
                            <div className="btn" onClick={() => { enterCurrentPage(searchType, searchWord, index + 1) }}>{index + 1}</div>
                        )
                    })
                }
            </PageBtn>
        </SearchWrapper>
    )
}
export default SearchList;