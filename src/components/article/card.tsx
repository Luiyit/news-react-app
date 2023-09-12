import React from 'react'
import { ArticleType } from '../../types/entities'
import styled from 'styled-components'

const Box = styled.div`
  height: 250px;
  border: 1px solid black;
  padding: 20px;
`;

interface props {
  article: ArticleType
}

const ArticleCard: React.FC<props> = ({ article }) => {
  return (
    <Box>
      <h2>{ article.id } | { article.title }</h2>      
    </Box>
  )
}

export default ArticleCard
