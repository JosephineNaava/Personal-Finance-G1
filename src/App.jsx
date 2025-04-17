import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

function App() {
  return (
    <RouterProvider router={router}/>

    // <div className="underline text-3xl font-bold">
    //   PersonalFinanceDAshboard
    // </div>
  )
}

export default App
