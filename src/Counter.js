import { IconButton } from "@mui/material";
import { useState } from "react";
import Badge from "@mui/material/Badge";
export function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDisLike] = useState(0);

  const messageStyle = {
    display: like - dislike >= 10 ? "block" : "none",
  };
  return (
    <div className="likeDiv">
      {/* <h2 style={messageStyle}>You are Awesome</h2> */}
      {like - dislike >= 10 ? <h6>Must Watch 😍</h6> : null}
      <Badge badgeContent={like} color="primary">
        <IconButton onClick={() => setLike(like + 1)}>👍</IconButton>
      </Badge>

      <Badge badgeContent={dislike} color="error">
        <IconButton onClick={() => setDisLike(dislike + 1)}>👎</IconButton>
      </Badge>
      {/* <IconButton className="likeBtn" onClick={() => setLike(like + 1)}>
        😍{like}
      </IconButton>
      <IconButton className="likeBtn" onClick={() => setDisLike(dislike + 1)}>
        😭{dislike}
      </IconButton> */}
    </div>
  );
}
