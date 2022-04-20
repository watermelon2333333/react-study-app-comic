import React from "react";
import { useNavigate } from "react-router";
import { getCount } from "../../api/util";
import { ListWraper, List, ListItem } from './style';
import LazyLoad from "react-lazyload";
function ComicList(props) {
    const { tabName } = props;
    const {recommendList} = props;
    recommendList.length = 8;
    const history = useNavigate();
    const enterDetails = (id) => {
        history(`/detail/${id}`)
    }
    return (
        <ListWraper>
            <h1 className="title">{tabName}</h1>

            <List>
                {
                    recommendList.map((item, index) => {
                        return (
                            <ListItem key={item.comicId} onClick={() => enterDetails(item.comicId)}>
                                <div className="img_wrapper">
                                    <div className="decorate"></div>
                                    <LazyLoad placeholder={<img width="100%" height="100%" src={require('../../assets/load.webp')} />} >
                                        <img src={item.cover + '?param=300x300'} width='100%' height='100%' alt='奇幻漫画' />
                                    </LazyLoad>
                                    <div className="play_count">
                                        <span className="count">{getCount(item.playCount)}</span>
                                    </div>
                                </div>
                                <div className="desc">{item.title}</div>
                            </ListItem>
                        )
                    })
                }
            </List>
        </ListWraper>
    )
}
export default ComicList;