import React from 'react'
import { ArticleType } from '../../types/entities'
import ArticleCard from './card'
import { Col, Row } from 'antd';

interface props {
  articles: ArticleType[]
}

const ArticleList: React.FC<props> = ({ articles }) => {
  return (
    <Row gutter={[10,10]}>
      { articles.map(article => (
        <Col span={8} key={article.id}>
          <ArticleCard article={article} />
        </Col>
      ))}  
    </Row>
  )
}

export default ArticleList
