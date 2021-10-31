import { ReactText } from 'react-router/node_modules/@types/react'

// CPU
export interface cpuDropdownInterface {
  manufacturer: boolean
  series: boolean
  codeName: boolean
  coreCount: boolean
  threadCount: boolean
  tdp: boolean
  releaseDate: boolean
  socket: boolean
}

export interface cpuFilterInterface {
  manufacturer: ReactText[]
  series: ReactText[]
  codeName: ReactText[]
  coreCount: number[]
  threadCount: number[]
  tdp: number[]
  releaseDate: ReactText[]
  socket: ReactText[]
}

export type cpuDropdownType =
  | 'manufacturer'
  | 'series'
  | 'codeName'
  | 'coreCount'
  | 'threadCount'
  | 'tdp'
  | 'releaseDate'
  | 'socket'

// MOTHERBOARD
export interface motherboardDropdownInterface {
  manufacturer: boolean
  formFactor: boolean
  memoryType: boolean
  memorySlot: boolean
  socket: boolean
}

export interface motherboardFilterInterface {
  manufacturer: ReactText[]
  formFactor: ReactText[]
  memoryType: ReactText[]
  memorySlot: number[]
  socket: ReactText[]
}

export type motherboardDropdownType =
  | 'manufacturer'
  | 'formFactor'
  | 'memoryType'
  | 'memorySlot'
  | 'socket'
