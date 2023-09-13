import ArticleList from '../../components/article/list';
import { useFetchArticles } from '../../components/hooks/fetchers/useFetchArticles';
import MainLayout from '../../components/layout/main';
import Container from '../../components/styled/container';
import { Col, Row } from 'antd';
import FilterBar from './components/filter_bar';
import SearchBar from './components/search_bar';
import LoadMore from './components/load_more';
import { CategoryType, SourceType } from '../../types/entities';
import { Div } from '../../components/styled/blocks';
import AbsoluteLoadingBlock from '../../components/absolute_loading_block';

function HomePage(){
  const { pagination, articles, loading, addFilter, removeFilter, fetchNextPage } = useFetchArticles()

  const onSourceToggle = (source?: SourceType) => {
    if(source) addFilter('sourceId', source.id)
    else removeFilter('sourceId')
  }

  const onCategoryToggle = (cat?: CategoryType) => {
    if(cat) addFilter('categoryId', cat.id)
    else removeFilter('categoryId')
  }

  const onSearchChange = (val: string) => {
    addFilter('q', val)
  }

  return (
    <MainLayout>
      <Container>
        <SearchBar onChange={onSearchChange}/>
          
          <Row gutter={[20,20]}>
            <Col md={24} lg={16}>
              <Div position="relative">
                <AbsoluteLoadingBlock loading={loading} />
                <ArticleList articles={articles} />
                <LoadMore {...{fetchNextPage, loading, pagination} } />
              </Div>       
            </Col>

            <Col md={24} lg={8}>
              <FilterBar
                onSourceToggle={onSourceToggle} 
                onCategoryToggle={onCategoryToggle} 
              />
            </Col>
          </Row>
        
      </Container>
    </MainLayout>
  )
}

export default HomePage
