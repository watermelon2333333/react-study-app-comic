import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnySearchDataDispatch } from './store/actionCreator'
import SearchList from "../../component/searchList";
import { isEmptyObject } from "../../api/util";
import { SearchTab } from "./style";
function ComicSearch(props) {
    const { searchData, searchPage } = useSelector((state) => {
        return {
            searchData: state.search.searchData,
            searchPage: state.search.searchPage
        }
    })
    const searchDataRel = searchData ? searchData : [];
    const dispatch = useDispatch();
    const searchTitle = (searchType, keyword, currentPage) => {
        const fixedQuery = keyword.replace(/[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g,
            '');
        console.log(fixedQuery)
        if (fixedQuery === '') {
            alert('请输入正确关键词嗷')
        } else {
            dispatch(getAnySearchDataDispatch(searchType, fixedQuery, currentPage));
        }
    }
    const searchAuthor = (searchType, keyword, currentPage) => {
        const fixedQuery = keyword.replace(/[`:_.~!@#$%^&*() \+ =<>?"{}|, \/ ;' \\ [ \] ·~！@#￥%……&*（）—— \+ ={}|《》？：“”【】、；‘’，。、]/g,
            '');
        console.log(fixedQuery)
        if (fixedQuery === '') {
            alert('请输入正确关键词嗷')
        } else {
            dispatch(getAnySearchDataDispatch(searchType, fixedQuery, currentPage));
        }
    }

    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.currentTarget.value)
    };
    return (
        <div>
            <SearchTab>
                <input className="input" type='text' value={query} placeholder='输入关键字' onChange={handleChange} />
                <input className="searchBtn" type='submit' value='搜书名' onClick={() => { searchTitle('title', query, 1) }} />
                <input className="searchBtn" type='submit' value='搜作者' onClick={() => { searchAuthor('author', query, 1) }} />
            </SearchTab>

            {
                (!isEmptyObject(searchDataRel)||searchDataRel != null) ? (
                    <SearchList searchData={searchDataRel} ></SearchList>
                ) : (<h1>获取搜索数据错误</h1>)
            }

        </div>
    )
}
export default ComicSearch;