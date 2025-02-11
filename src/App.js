import PostLists from './features/posts/PostsLists'
import AddPostForm from './features/posts/AddPostForm';

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostLists />
    </main>
  );
}

export default App;
