import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <div className="article-list" >
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ArticleList;