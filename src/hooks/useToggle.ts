import { useState } from 'react'

interface UseToggle {
  toggle: boolean
  updateToggle: () => void
}

export const useToggle =
  (initialState: boolean = false): UseToggle => {

    const [toggle, setToggle] = useState<boolean>(initialState)

    const updateToggle = () => {
      setToggle(prev => !prev)
    }
    return { toggle, updateToggle }
  }
