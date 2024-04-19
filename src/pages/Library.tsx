import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import MainSection from '../components/MainSection';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { fetchPosts } from '../api/postsApi';
import { fetchComments } from '../api/commentsApi';

const Library: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const handleSearch = (searchTerm: string) => {
    // Ваша логика поиска
    console.log('Поиск слова:', searchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      const postsData = await fetchPosts();
      const commentsData = await fetchComments();
      setPosts(postsData);
      setComments(commentsData);
    };

    fetchData();
  }, []);

  return (
    <Layout>

      <MainSection>
        <h1>Library_page</h1>

        <SearchBar onSearch={handleSearch}/>

        {posts.map((post: any) => (
          <Card key={post.id} title={post.title} body={post.body} />
        ))}
      </MainSection>

      <aside>
        <h2>Comments</h2>
        <ul>
          {comments.map((comment: any) => (
            <li key={comment.id}>
              <strong>{comment.name}</strong>: {comment.body}
            </li>
          ))}
        </ul>
      </aside>

    </Layout>
  );
}

export default Library;