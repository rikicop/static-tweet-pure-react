import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Avatar() {

  return (
    <img src="https://cdn.myanimelist.net/images/characters/5/171719.webp"
      className="avatar"
      alt="avatar" />
  )
}

function Message() {
  return (
    <div className="message">
      His truer motives are to use the government
      to further his own needs since the age of
      the samurai is ending.
    </div>
  )
}

function Author() {
  return (
    <span className="author">
      <span className="name">Kagetoki Kariya</span>
      <span className="handle">@samuraiChamploo</span>
    </span>
  )
}

const Time = ()=>(
  <span className="time">3h Ago</span>
)

const ReplyButton = () =>(
  <i className="fa fa-reply reply-button"/>
)

const RetweetButton = () =>(
  <i className="fa fa-retweet retweet-button"/>
)

const LikeButton = () =>(
  <i className="fa fa-heart like-button"/>
)

const MoreOptionsButton =()=>(
  <i className=" fa fa-ellipsis-h more-options-button"/>
) 

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author/><Time/>
        <Message/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton/>
          <LikeButton/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<Tweet />, document.querySelector('#root'));