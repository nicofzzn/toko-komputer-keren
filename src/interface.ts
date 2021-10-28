import { ReactText } from 'react-router/node_modules/@types/react'

export interface cpuDropdownInterface {
  manufacturer: boolean
  series: boolean
  codeName: boolean
}

export interface cpuFilterInterface {
  manufacturer: ReactText[]
  series: ReactText[]
  codeName: ReactText[]
}

export type cpuDropdownType = 'manufacturer' | 'series' | 'codeName'
