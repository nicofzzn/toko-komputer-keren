import {
  Box,
  VStack,
  HStack,
  Text,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const FilterResult = () => {
  return (
    <>
      <HStack>
        <Text>Showing 77 products for CPU</Text>
        <Spacer />
        <HStack>
          <Text>Sort by</Text>
          <Menu>
            <MenuButton
              size='sm'
              borderRadius='0'
              border='solid 1px'
              borderColor='gray.400'
              _focus={{
                outline: 'none',
              }}
              as={Button}
              rightIcon={<BsChevronDown />}
            >
              Harga Tertinggi
            </MenuButton>
            <MenuList
              bg='white'
              shadow='none'
              borderRadius='0'
              border='solid 1px'
              borderColor='gray.400'
              minW='200px'
            >
              <MenuItem h='40px' _hover={{ color: 'accent.400' }}>
                Terbaru
              </MenuItem>
              <MenuItem h='40px' _hover={{ color: 'accent.400' }}>
                Harga Tertinggi
              </MenuItem>
              <MenuItem h='40px' _hover={{ color: 'accent.400' }}>
                Harga Terendah
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </>
  )
}

export default FilterResult
