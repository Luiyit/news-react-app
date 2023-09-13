import styled, { css } from 'styled-components';
import { Div } from '../../../components/styled/blocks';
import { useState } from 'react';
import LoadingBlock from '../../../components/loading_block';

const Header = styled.h4`
  background-color: #eee;
  text-transform: uppercase;
  padding: 15px;
  border-bottom: 3px solid #c83d66;
  text-align: center;
`

const Tag = styled.div`
  cursor: pointer;
  background-color: #fdfdfd;
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #ddd;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: all .3s ease-in-out;

  &:hover{
    background-color: #c83d66;
    color: white;
  };

  ${ ({ selected }) => 
    selected && 
    css`
      background-color: #c83d66;
      color: white;
    `}
`

function FilterBox<DataType>({ title, children, onToggle, loading }){
  const [selected, setSelected] = useState<DataType | null>(null)

  const onClick = (item: DataType) => {
    const selectedState = (selected === item) ? null : item
    setSelected(selectedState)
    onToggle(selectedState)
  }
  return (
    <>
      <Header>{title}</Header>
      <LoadingBlock loading={loading} />
      {!loading && (
        <Div padding="10px">
          {children(onClick, selected)}
        </Div>
      )}
    </>
  )
}

export { Tag, Header }
export default FilterBox
