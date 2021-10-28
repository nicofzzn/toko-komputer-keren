import {
  Box,
  VStack,
  HStack,
  Text,
  Spacer,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BsDash, BsPlus } from 'react-icons/bs'
import { ReactText } from 'react-router/node_modules/@types/react'
import { cpuDropdownInterface, cpuDropdownType, cpuFilterInterface } from '../interface'

const defaultDropdown: cpuDropdownInterface = {
  manufacturer: true,
  series: false,
  codeName: false,
}

const defaultFilter: cpuFilterInterface = {
  manufacturer: ['all'],
  series: ['all'],
  codeName: ['all'],
}

const FilterCpu = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)
  const [filters, setFilters] = useState(defaultFilter)

  function onDropdownChange(e: cpuDropdownType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  function onFilterChange(e: cpuDropdownType, value: ReactText[]) {
    if (filters[e][0] === 'all' && value.length > 1) {
      setFilters({ ...filters, [e]: value.filter(current => current !== 'all') })
    } else if (
      !filters[e].find(current => current === 'all') &&
      value.find(current => current === 'all')
    ) {
      setFilters({ ...filters, [e]: ['all'] })
    } else {
      setFilters({ ...filters, [e]: value })
    }

    if (value.length === 0) {
      setFilters({ ...filters, [e]: ['all'] })
    }
  }

  return (
    <Box w='full' fontWeight='medium'>
      <VStack alignItems='flex-start'>
        {/* --------- */}
        <Box w='full'>
          <HStack
            w='full'
            cursor='pointer'
            onClick={() => onDropdownChange('manufacturer')}
          >
            <Text>Manufacturer</Text>
            <Spacer />
            <Box>{dropdown.manufacturer ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.manufacturer && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.manufacturer}
                onChange={value => onFilterChange('manufacturer', value)}
                size='sm'
                colorScheme='accent'
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='amd'>Amd</Checkbox>
                  <Checkbox value='intel'>Intel</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>
        {/* --------- */}
        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('series')}>
            <Text>Series</Text>
            <Spacer />
            <Box>{dropdown.series ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.series && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.series}
                size='sm'
                colorScheme='accent'
                onChange={e => onFilterChange('series', e)}
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='AMD Ryzen 3'>AMD Ryzen 3</Checkbox>
                  <Checkbox value='AMD Ryzen 5'>AMD Ryzen 5</Checkbox>
                  <Checkbox value='AMD Ryzen 7'>AMD Ryzen 7</Checkbox>
                  <Checkbox value='AMD Ryzen 9'>AMD Ryzen 9</Checkbox>
                  <Checkbox value='Intel Core i3'>Intel Core i3</Checkbox>
                  <Checkbox value='Intel Core i5'>Intel Core i5</Checkbox>
                  <Checkbox value='Intel Core i7'>Intel Core i7</Checkbox>
                  <Checkbox value='Intel Core i9'>Intel Core i9</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>
        {/* --------- */}
        <Box w='full'>
          <HStack w='full' cursor='pointer' onClick={() => onDropdownChange('codeName')}>
            <Text>Codename</Text>
            <Spacer />
            <Box>{dropdown.codeName ? <BsDash /> : <BsPlus />}</Box>
          </HStack>
          {dropdown.codeName && (
            <Box pl='2' mt='2'>
              <CheckboxGroup
                value={filters.codeName}
                size='sm'
                colorScheme='accent'
                onChange={e => onFilterChange('codeName', e)}
              >
                <VStack align='flex-start'>
                  <Checkbox value='all'>All</Checkbox>
                  <Checkbox value='matise'>matise</Checkbox>
                  <Checkbox value='pinacle ridge'>pinacle ridge</Checkbox>
                  <Checkbox value='skylake'>skylake</Checkbox>
                  <Checkbox value='haswell'>haswell</Checkbox>
                </VStack>
              </CheckboxGroup>
            </Box>
          )}
        </Box>
      </VStack>
    </Box>
  )
}

export default FilterCpu
