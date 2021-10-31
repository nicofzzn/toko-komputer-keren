import { ReactText } from 'react-router/node_modules/@types/react'

export interface cpuDropdownInterface {
  manufacturer: boolean
  series: boolean
  codeName: boolean
  coreCount: boolean
  threadCount: boolean
  tdp: boolean
  releaseDate: boolean
}

export interface cpuFilterInterface {
  manufacturer: ReactText[]
  series: ReactText[]
  codeName: ReactText[]
  coreCount: number[]
  threadCount: number[]
  tdp: number[]
  releaseDate: ReactText[]
}

export type cpuDropdownType =
  | 'manufacturer'
  | 'series'
  | 'codeName'
  | 'coreCount'
  | 'threadCount'
  | 'tdp'
  | 'releaseDate'
