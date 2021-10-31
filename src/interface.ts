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

// GPU
export interface gpuDropdownInterface {
  manufacturer: boolean
  chipset: boolean
  memoryType: boolean
  memory: boolean
  coreClock: boolean
  boostClock: boolean
  interface: boolean
  tdp: boolean
}

export interface gpuFilterInterface {
  manufacturer: ReactText[]
  chipset: ReactText[]
  memoryType: ReactText[]
  memory: number[]
  coreClock: number[]
  boostClock: number[]
  interface: ReactText[]
  tdp: number[]
}

export type gpuDropdownType =
  | 'manufacturer'
  | 'chipset'
  | 'memoryType'
  | 'memory'
  | 'coreClock'
  | 'boostClock'
  | 'interface'
  | 'tdp'
