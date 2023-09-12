import React from "react";
import { useQuery } from "react-query";

// Function to fetch posts data from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

function PostList() {
  const { data, error, isLoading } = useQuery("posts", fetchPosts);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>React Query </h1>
      <ul>
        {data.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
