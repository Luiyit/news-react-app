import { CategoryType, PreferenceType, SourceType } from '../../../types/entities'
import { Div, Flex } from '../../../components/styled/blocks'
import PreferenceItem from './preference_item'
import styled from 'styled-components'
import { useCallback, useMemo, useState } from 'react'
import { Button, Select, SelectProps } from 'antd';
import PreferenceService from '../../../services/PreferenceService'

const List = styled.div`
  width: 400px;
  h4{
    padding: 15px;
    border-bottom: 2px solid #c83d66;
    text-transform: uppercase;
  }
  .select{
    padding: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  .items{
    padding: 10px;
    margin-bottom: 15px;
  }
`

export type Source = 'Source'
export type Category = 'Category'
export type PreferableTypes = `App\\Models\\${Source}` | `App\\Models\\${Category}`

type OptionType = {
  value: number;
  label: string;
}

interface Props {
  preferences: PreferenceType[], 
  onDelete: (item: PreferenceType) => void
  onCreate: (item: PreferenceType) => void
  title: string
  options: SourceType[] | CategoryType[]
  type: Source | Category
}

function PreferenceList({ preferences, onDelete, onCreate, title, options, type }: Props){
  const [value, setValue] = useState<number | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const filteredOptions: OptionType[] = useMemo(() => {
    const ids = preferences.map(item => (item.preferable.id));

    return options.filter(opt => {
      return !ids.includes((opt as { id: number }).id)
    }).map(opt => ({ value: +opt.id, label: opt.name }))

  }, [preferences, options])


  const filterOption = useCallback((input: string, option: OptionType | undefined) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase()), []);

  const addPreference = useCallback(async () => {
    setLoading(true)
    const service = new PreferenceService({});

    const item = options.find(opt => opt.id === value)
    if(!item) return;

    const preference = await service.create({
      preferableType: type,
      preferableId: item.id,
    });

    onCreate(preference);
    setValue(null)
    setLoading(false)
  }, [onCreate, options, value, type])
  
  return (
    <List>
      <h4>{ title }</h4>

      <div className="select">
        {/* Show select when options are available */}
        {filteredOptions.length > 0 && (
          <Flex>
            <Select<number, OptionType>
              showSearch
              placeholder={`Add a new ${type}`}
              optionFilterProp="children"
              onChange={setValue}
              filterOption={filterOption}
              options={filteredOptions}
              style={{ width: '100%' }}
              disabled={loading}
            />
            <Button 
              type="primary" 
              style={{ marginLeft: "5px"}} 
              onClick={addPreference} 
              loading={loading}
            >
              Add
            </Button>
          </Flex>
        )}
      </div>
      <div className="items">      
        {preferences.map(preference => (
          <PreferenceItem key={preference.id} preference={preference} onDelete={onDelete}/>
        ))}
      </div>
    </List>
  )
}

export default PreferenceList
