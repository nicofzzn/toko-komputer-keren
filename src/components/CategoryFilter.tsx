import { Box, VStack, HStack, Text, Spacer, Link } from '@chakra-ui/react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'

interface DropdownInterface {
  cpu: boolean
  gpu: boolean
  motherboard: boolean
}

const defaultDropdown: DropdownInterface = {
  cpu: false,
  gpu: false,
  motherboard: false,
}

type CategoryType = 'cpu' | 'gpu' | 'motherboard'

const CategoryFilter = () => {
  const [dropdown, setDropdown] = useState(defaultDropdown)

  function onDropdownChange(e: CategoryType) {
    setDropdown({ ...dropdown, [e]: !dropdown[e] })
  }

  return (
    <Box pt='1' w='full' fontWeight='medium'>
      <Text>Category</Text>
      <VStack ml='2' mt='4' fontSize='small' alignItems='flex-start'>
        <HStack w='full' cursor='pointer' _hover={{ color: 'accent.400' }}>
          <Link>CPU</Link>
          <Spacer />
          <Box transform={dropdown.cpu ? 'rotate(180deg)' : ''}>
            <BsChevronDown onClick={() => onDropdownChange('cpu')} />
          </Box>
        </HStack>
        {dropdown.cpu && (
          <Box pl='2' w='full'>
            <VStack alignItems='flex-start'>
              <Link _hover={{ color: 'accent.400' }}>AMD</Link>
              <Link _hover={{ color: 'accent.400' }}>Intel</Link>
            </VStack>
          </Box>
        )}
        <HStack w='full' cursor='pointer' _hover={{ color: 'accent.400' }}>
          <Link>GPU</Link>
          <Spacer />
          <Box transform={dropdown.gpu ? 'rotate(180deg)' : ''}>
            <BsChevronDown onClick={() => onDropdownChange('gpu')} />
          </Box>
        </HStack>
        {dropdown.gpu && (
          <Box pl='2' w='full'>
            <VStack alignItems='flex-start'>
              <Link _hover={{ color: 'accent.400' }}>AMD</Link>
              <Link _hover={{ color: 'accent.400' }}>Intel</Link>
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  )
}

export default CategoryFilter
