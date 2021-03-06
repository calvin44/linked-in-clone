import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './post.css'
import InputOptions from './InputOptions'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const Post = forwardRef(({name, description, message, photoURL}, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoURL}>{name[0]}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>

            <div className="post__buttons">
                <InputOptions Icon = {ThumbUpOutlinedIcon} title="Like" color='gray' />
                <InputOptions Icon = {ChatOutlinedIcon} title="Comment" color='gray' />
                <InputOptions Icon = {ShareOutlinedIcon} title="Share" color='gray' />
                <InputOptions Icon = {SendOutlinedIcon} title="Send" color='gray' />
            </div>
        </div>
    )
})

export default Post
