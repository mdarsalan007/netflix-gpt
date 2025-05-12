import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Body from "./components/Body"
import Browse from "./components/Browse"
import Login from "./components/Login"

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Login/>
  },
  {
    path: "/body",
    element : <Body/>
  },
  {
    path: "/browse",
    element : <Browse/>
  }
  ])

  return (
    <div className="app">
      <RouterProvider router={appRouter}
      
      />
    </div>
  )
}

export default App
