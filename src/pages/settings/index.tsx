import { useCallback, useEffect, useMemo, useState } from 'react'
import PreferenceService from '../../services/PreferenceService'
import { PreferenceType } from '../../types/entities';
import { Tabs } from 'antd';
import { useFetchSources } from '../../components/hooks/fetchers/useFetchSources';
import { useFetchCategories } from '../../components/hooks/fetchers/useFetchCategories';
import PreferenceList from './components/preference_list';
import MainLayout from '../../components/layout/main';
import Container from '../../components/styled/container';
import { Div, Flex } from '../../components/styled/blocks';

const SOURCE_TYPE = 'App\\Models\\Source'

function SettingsPage(){
  
  const { sources } = useFetchSources()
  const { categories } = useFetchCategories()

  const [userSources, setUserSources] = useState<PreferenceType[]>([])
  const [userCategories, setUserCategories] = useState<PreferenceType[]>([])

  useEffect(() => {
    (async() => {
      const service = new PreferenceService({});
      const response = await service.index();
      
      interface ReduceType {
        sources: PreferenceType[],
        categories: PreferenceType[],
      }

      const state = response.data.reduce<ReduceType>((data, item: PreferenceType) => {
        if(item.type === SOURCE_TYPE) data.sources.push(item)
        else data.categories.push(item)

        return data;
      }, { sources: [], categories: []});

      setUserSources(state.sources)
      setUserCategories(state.categories)
    })()
  }, []);

  const updateState = useCallback(async (item: PreferenceType, list: PreferenceType[], setter: (list: PreferenceType[]) => void) => {
    const index = list.findIndex(elm => elm.id === item.id);
    if (index < 0) return;
    list.splice(index, 1)
    setter(list);
  }, [])

  const onDelete = useCallback((item: PreferenceType) => {
    if(item.type === SOURCE_TYPE) updateState(item, [...userSources], setUserSources)
    else updateState(item, [...userCategories], setUserCategories)
  }, [updateState, userCategories, userSources])
  
  const onCreate = useCallback((item: PreferenceType) => {
    if(item.type === SOURCE_TYPE) setUserSources(state => ([...state, item]))
    else setUserCategories(state => ([...state, item]))
  }, [])

  const items = useMemo(() => {
    return [
      {
        label: 'Sources',
        key: 'sources',
        children: <PreferenceList 
          title="Your favorite sources"
          preferences={userSources} 
          onDelete={onDelete}
          onCreate={onCreate}
          options={sources}
          type={"Source"}
        />
      },
      {
        label: 'Categories',
        key: 'categories',
        children: <PreferenceList 
          title="Your favorite categories"
          preferences={userCategories} 
          onDelete={onDelete}
          onCreate={onCreate}
          options={categories}
          type={"Category"}
        />
      }
    ]
  }, [userSources, userCategories, onDelete, onCreate, sources, categories]);

  return (
    <MainLayout>
      <Container>
        <Flex justify='center' align='center' height="calc(100vh - 180px)">
          <Div>
            <Tabs items={items} />
          </Div>
        </Flex>

      </Container>
    </MainLayout>
  )
}

export default SettingsPage
