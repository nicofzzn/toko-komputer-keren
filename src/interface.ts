import { ReactText } from 'react-router/node_modules/@types/react'

// CPU
export interface cpuDropdownInterface {
  manufacturer: boolean
  series: boolean
  codeName: boolean
  coreCount: boolean
  coreClock: boolean
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
  coreClock: number[]
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
  | 'coreClock'

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

// RAM
export interface ramDropdownInterface {
  manufacturer: boolean
  type: boolean
  speed: boolean
  module: boolean
}

export interface ramFilterInterface {
  manufacturer: ReactText[]
  type: ReactText[]
  module: ReactText[]
  speed: number[]
}

export type ramDropdownType = 'manufacturer' | 'type' | 'speed' | 'module'

// STORAGE
export interface storageDropdownInterface {
  manufacturer: boolean
  capacity: boolean
  interface: boolean
  formFactor: boolean
  nvme: boolean
}

export interface storageFilterInterface {
  manufacturer: ReactText[]
  capacity: number[]
  interface: ReactText[]
  formFactor: ReactText[]
  nvme: ReactText[]
}

export type storageDropdownType =
  | 'manufacturer'
  | 'capacity'
  | 'formFactor'
  | 'interface'
  | 'nvme'

// PSU
export interface psuDropdownInterface {
  manufacturer: boolean
  efficiency: boolean
  wattage: boolean
  modular: boolean
  type: boolean
}

export interface psuFilterInterface {
  manufacturer: ReactText[]
  efficiency: ReactText[]
  wattage: number[]
  modular: ReactText[]
  type: ReactText[]
}

export type psuDropdownType =
  | 'manufacturer'
  | 'efficiency'
  | 'wattage'
  | 'modular'
  | 'type'

// MONITOR
export interface monitorDropdownInterface {
  manufacturer: boolean
  screenSize: boolean
  refreshRate: boolean
  resulution: boolean
  panelType: boolean
}

export interface monitorFilterInterface {
  manufacturer: ReactText[]
  screenSize: number[]
  refreshRate: number[]
  resulution: ReactText[]
  panelType: ReactText[]
}

export type monitorDropdownType =
  | 'manufacturer'
  | 'screenSize'
  | 'refreshRate'
  | 'resulution'
  | 'panelType'

// CPU COOLER
export interface cpuCoolerDropdownInterface {
  manufacturer: boolean
  height: boolean
  socket: boolean
  waterCooled: boolean
}

export interface cpuCoolerFilterInterface {
  manufacturer: ReactText[]
  height: number[]
  socket: ReactText[]
  waterCooled: ReactText[]
}

export type cpuCoolerDropdownType = 'manufacturer' | 'height' | 'socket' | 'waterCooled'

// CPU CASE
export interface caseDropdownInterface {
  manufacturer: boolean
  formFactor: boolean
}

export interface caseFilterInterface {
  manufacturer: ReactText[]
  formFactor: ReactText[]
}

export type caseDropdownType = 'manufacturer' | 'formFactor'
