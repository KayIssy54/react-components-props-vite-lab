import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ArticleList;