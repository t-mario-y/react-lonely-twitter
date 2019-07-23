function Tweet(props){
  // Reactからこのコンポーネントの
  // like値と、likeの値をセットするための関数を取り出す
  // デフォルト値はfalseにする
  //この段階ではsetLikeが定義されてないことに注目
  const [liked, setLike] = React.useState(false);

  //クリック時の処理toggleLikeを定義する(いいねのbooleanを切り替えて)
  //ReactのcallbackにseetLike関数を登録している
  //useCallBackは第2引数として配列を渡す必要がある
  const toggleLike = React.useCallback(() => setLike((prev) => !prev), [setLike]);

  return (
    <div className="tweet">
      <div className="icon-container">{props.icon}</div>
      <div className="body-container">
        <div className="status-display">
          <span className="display-name">{props.displayName}</span>
          <span className="account-name">@{props.accountName}</span>
        </div>
        <div className="content">{props.content}</div>
        <div className="status-action">
          <span onClick={toggleLike}>{liked ? '❤️' : '♡'}</span>
        </div>
      </div>
    </div>
  );
}