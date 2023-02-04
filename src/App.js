
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';

function App() {

  return (
    <div className="App mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
