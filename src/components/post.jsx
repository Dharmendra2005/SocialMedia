const Post = ({post}) => {
  return (
    <div className="card" style={{ width: "21rem",height:"26rem", background: "#d4d5cdff", padding: "20px", borderRadius:"0.5rem"}}>
      <h5 className="card-title " style={{textAlign: "center"}}>{post.title}</h5>
      <p> {post.img}</p>
      <div className="card-body">
        <p className="card-text">
          {post.body}
        </p>
        {/* {post.tag.map(tag => <span className="badge text-bg-primary hashtag">{tag}</span>)}  */}
        {/* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{post.reactions} */}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {post.reactions}
</span>

    {/* <span className="visually-hidden">unread messages</span> */}
  {/* </span> */}
      </div>
    </div>
  );
};

export default Post;
