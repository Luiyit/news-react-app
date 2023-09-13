import { useState } from 'react'
import { Input } from 'antd'
import { Div } from '../../../components/styled/blocks'
import Text from '../../../components/styled/texts'

const SearchBar = ({ onChange }) => {
  const [search, setSearch] = useState<string>("")
  
  const onInputChange = (event) => {
    setSearch(event.target.value);
    onChange(event.target.value)
  }

  return (
    <Div padding="15px 0">
      <Div align="center" paddingB="15px">
        <Text fontSize="25px">Search hundreds of articles</Text>
        <Text>New Aggregator app in the new way to consume world articles.</Text>
      </Div>
      <Input 
        onChange={onInputChange} 
        placeholder="just type and we make the search"
      />
    </Div>
  )
}

export default SearchBar
