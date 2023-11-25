import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizTopics from './Components/QuizTopics/QuizTopics';
import Blogs from './Components/Blogs/Blogs';
import Layout from './Components/Layout/Layout';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Statistics from './Components/Statistics/Statistics';

function App() {
const router = createBrowserRouter([
  {
    path: '/', element: <Layout></Layout>,
    children: [
      {path: 'quiz', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <QuizTopics></QuizTopics>},
      
      {path: 'statistics', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statistics></Statistics>},      
      {path: 'blog', element: <Blogs></Blogs>},      

      {path: 'quiz/:quizId', loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`), element: <QuizDetails></QuizDetails>}
      
    ],

  },
])
  
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>      
    </div>
  );
}

export default App;
