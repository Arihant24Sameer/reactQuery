import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostList from './PostList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <PostList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
