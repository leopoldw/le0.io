import { useContext } from 'react'
import { DarkModeContext } from 'pages/post'

const useDarkMode = () => {
  const { darkMode } = useContext(DarkModeContext)
  return darkMode
}

export default useDarkMode