import React from "react";
import { Item, List, Wrapper } from './style';
function RankList(props) {
    const {rankList,tabName} = props;
    rankList.length = 10;
    return (
        <Wrapper>
            <h1 className="title">{tabName}</h1>
            <List>
                {
                    props.rankList.map((item,index) =>{
                        return(
                            <Item key={item.comicId }>
                                <div className="content">
                                    <div className="left_column">
                                        <img className="img" src={item.cover} ></img>
                                    </div>
                                    <div className="right_column">
                                        <span className="name inside">{item.title}</span>
                                        <span className="author inside">作者:{item.author}</span>
                                        <span className="describe inside">描述:{item.descs}</span>
                                    </div>
                                </div>
                            </Item>
                        )
                    })
                }
            </List>
        </Wrapper>
    )
}
export default RankList;