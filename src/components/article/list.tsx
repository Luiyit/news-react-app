import React from 'react'
import { ArticleType } from '../../types/entities'
import ArticleCard from './card'
import { Col, Row } from 'antd';

interface props {
  articles: ArticleType[]
}

const ArticleList: React.FC<props> = ({ articles }) => {
  return (
    <Row gutter={[20,20]}>
      { articles.map(article => (
        <Col sm={24} md={12} key={article.id}>
          <ArticleCard article={article} />
        </Col>
      ))}  
    </Row>
  )
}

export default ArticleList
