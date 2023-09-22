import './App.css';
import Counter from './Counter/counter';
import AddPost from './Post/AddPost';
import PostList from './Post/PostList'

function App() {
  return (
    <div className="App">
        <AddPost />
        <PostList />
        <Counter />
    </div>
  );
}

export default App;
