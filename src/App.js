import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import QuizTopics from './Components/QuizTopics/QuizTopics';
import Blogs from './Components/Blogs/Blogs';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import Statistics from './Components/Statistics/Statistics';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Layout from './Components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {path:'/', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <QuizTopics></QuizTopics> }, 
    {
      path: '/', element: <Layout></Layout>,
      children: [
        { path: 'statistics', loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statistics></Statistics> },
        { path: 'blog', element: <Blogs></Blogs> },

        { path: 'quiz/:quizId', loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`), element: <QuizDetails></QuizDetails> }

      ]
    }, 
        { path: '*', element: <PageNotFound></PageNotFound> }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
