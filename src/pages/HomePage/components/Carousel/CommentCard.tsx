interface ICommentCardProps {
  icons: string
  comment: number
  username: string
  country: string
}

export const CommentCard = (props: ICommentCardProps) => {
  const { icons, comment, username, country } = props
  return (
    <div className="comment">
      <div className="stars">
        <i className={icons}></i>
        <i className={icons}></i>
        <i className={icons}></i>
        <i className={icons}></i>
        <i className={icons}></i>
      </div>
      <p>{comment}</p>
      <div className="account">
        <div className="img img-1"></div>
        <div className="username">
          <p>{username}</p>
          <small> {country}</small>
        </div>
      </div>
    </div>
  )
}
