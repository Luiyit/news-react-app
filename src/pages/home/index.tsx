import ArticleList from '../../components/article/list';
import { useFetchArticles } from '../../components/article/useFetchArticles';
import MainLayout from '../../components/layout/main';
import Container from '../../components/styled/container';

function HomePage(){
  const { articles, pagination, fetchNextPage } = useFetchArticles()
  
  return (
    <MainLayout>
      <Container>
        Home Page
        {pagination && (
          <div>
            { Object.keys(pagination).map((key: string) => {
              if(typeof pagination[key] !== 'object') return (
                <div key={key}>{ key } - { pagination[key] }</div>
              )
            }) }
          </div>
        )}
        
        <ArticleList articles={articles} />

        <button onClick={fetchNextPage}>Load More</button>
      </Container>
    </MainLayout>
  )
}

export default HomePage
