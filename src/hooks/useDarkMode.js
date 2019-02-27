import { useContext } from 'react'
import { DarkModeContext } from '../RootLayout'
import get from 'lodash/get'

// bug during SSR with `useContext` sometimes
// returning undefined, so use `get`
const useDarkMode = () =>
  get(useContext(DarkModeContext), `darkMode`, false)

export default useDarkMode