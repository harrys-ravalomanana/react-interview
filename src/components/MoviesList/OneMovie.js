import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import iconDown from './../../images/thumbs-down-regular.svg';
import iconUp from './../../images/thumbs-up-regular.svg';

function OneMovie(elt) {
    const [deleted, setDeleted] = useState(0);
    const [likes, setLikes] = useState(elt.likes);
    const [dislikes, setDislikes] = useState(elt.dislikes);
    const [liked, setLiked] = useState(false);
    const [likesRatio, setLikesRatio] = useState(0);
    var data;
    useEffect(() => {
        var res = parseFloat(likes) * 100 / (parseFloat(likes) + parseFloat(dislikes)) + '%';
        setLikesRatio(res);
    });
    if (elt) {
        // data = props.result;


        function handleLikeItem() {

            if (liked == true) {
                setDislikes(parseFloat(dislikes) + 1);
                //setLikes(parseFloat(likes) - 1);
            } else {
                setLikes(parseFloat(likes) + 1);
                //setDislikes(parseFloat(dislikes) - 1);
            }
            setLiked(!liked);

        };


        return (
            <div>
                <h3 className="item-title">{elt.title}</h3>
                <span className="item-category">{elt.category}</span>

                <div className="switch-wrapper">
                    <span className="item-dislikes">{dislikes}</span>
                    <img src={iconDown} className="likedown switch-icon" alt="likedown"/>
                    <label className="switch">
                        <button onClick={() => handleLikeItem()} className={liked ? 'liked' : 'disliked'}>Toggle
                            like/dislike
                        </button>
                        <span className="slider round"></span>
                    </label>
                    <img src={iconUp} className="likeup switch-icon" alt="likeup"/>
                    <span className="item-likes">{likes}</span>
                </div>
                <div className="likes-ratio">
                    <div className="likes"
                         style={{width: likesRatio}}>{likesRatio}</div>
                </div>
            </div>
        )
    }

    return null
}

export default connect(
    null,
    null
)(OneMovie);