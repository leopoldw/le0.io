import { useContext } from 'react'
import { DarkModeContext } from '../Root'
import get from 'lodash/get'

// bug during SSR with `useContext` sometimes
// returning undefined, so use `get`
const useDarkMode = () =>
  get(useContext(DarkModeContext), `darkMode`, true)

export default useDarkMode