import { RouterProvider } from "react-router-dom"
import { router } from "./routers/router"
import { MeteoContextProvider } from "./contexts/CartContext/CartContextProvider"

function App() {
  return (
    <MeteoContextProvider>
      <RouterProvider router={router} />
    </MeteoContextProvider>
  )
}
export default App
