import {Route, Routes} from 'react-router-dom'

import Layout from './components/Layout/Layout';
import {Users, Posts, Comments} from './pages'

function App() {
  return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
              <Route path={'users'} element={<Users/>}/>
              <Route path={'posts'} element={<Posts />}/>
              <Route path={'comments'} element={<Comments />} />
            </Route>

        </Routes>
  );
}

export default App;
