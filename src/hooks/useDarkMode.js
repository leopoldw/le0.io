import { useContext } from 'react'
import { DarkModeContext } from '../RootLayout'

const useDarkMode = () => {
  const { darkMode } = useContext(DarkModeContext)
  return darkMode
}

export default useDarkMode