
import { useFetchSources } from '../../../components/hooks/fetchers/useFetchSources';
import { useFetchCategories } from '../../../components/hooks/fetchers/useFetchCategories';
import FilterBox, { Tag } from './filter_box'
import { CategoryType, SourceType } from '../../../types/entities';

interface Props {
  onSourceToggle: (source: SourceType) => void,
  onCategoryToggle: (cat: CategoryType) => void,
}

function FilterBar({ onSourceToggle, onCategoryToggle }: Props){
  const { sources, loading: loadingSources } = useFetchSources()
  const { categories, loading: loadingCats } = useFetchCategories()
  
  return (
    <>
      <FilterBox<SourceType> title="Sources" onToggle={onSourceToggle} loading={loadingSources}>
        {(onClick: (item: CategoryType) => void, selected?: CategoryType) => (sources.map(source => (
          <Tag 
            key={source.id} 
            selected={selected?.id === source.id}
            onClick={() => onClick(source) } 
          >
            { source.name }
          </Tag>
        )))}
      </FilterBox>

      <FilterBox<CategoryType> title="Categories" onToggle={onCategoryToggle} loading={loadingCats}>
        {(onClick: (item: CategoryType) => void, selected?: CategoryType) => (categories.map(cat => (
          <Tag 
            key={cat.id} 
            selected={selected?.id === cat.id}
            onClick={() => onClick(cat) }
          >
            { cat.name }
          </Tag>
        )))}
      </FilterBox>
    </>
  )
}

export default FilterBar
