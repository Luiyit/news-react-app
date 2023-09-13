import ArticleList from '../../components/article/list';
import { useFetchArticles } from '../../components/article/useFetchArticles';
import MainLayout from '../../components/layout/main';
import Container from '../../components/styled/container';
import { Col, Row } from 'antd';

function HomePage(){
  const { articles, pagination, fetchNextPage } = useFetchArticles()
  
  return (
    <MainLayout>
      <Container>        
        <Row>
          <Col md={24} lg={16}>
            <ArticleList articles={articles} />
          </Col>

        </Row>

        <button onClick={fetchNextPage}>Load More</button>
        
      </Container>
    </MainLayout>
  )
}

export default HomePage
