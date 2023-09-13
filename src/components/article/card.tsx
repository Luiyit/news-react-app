import React, { useCallback } from 'react'
import { ArticleType } from '../../types/entities'
import styled from 'styled-components'
import { Div } from '../styled/blocks'
import { getDateFromISO } from '../../helpers/date'
import { Tag } from 'antd';

export const ImageBlock = styled(Div)`
  cursor: pointer;
  position: relative;
  background-color: #ddd;
  overflow: hidden;

  &:after, &:before{
    content: '';
    transition: all .3s ease-in-out;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &:before{
    z-index: 2;
    background-color: black;
    opacity: 0;
  }

  &:after{
    z-index: 1;
    background-image: ${({ src }) => `url(${src})`};
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center;
    transform: scale(1.1);
  }

  &:hover{
    &:after{
      transform: scale(1);
    }
    &:before{
      opacity: 0.2;
    }
  }
`;


const Card = styled.div`
  position: relative;
  
  .date{
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    text-align: center;
    padding: 10px;
    background-color: #c83d66;
    color: white;

    > *{
      line-height: 100%;
    }
    h4{
      margin-bottom: 5px;
    }
  }
  .card-body{
    padding: 20px;
    background-color: #eee;

    .tags{
      margin: 15px 0;
    }    
  }
`;

interface props {
  article: ArticleType
}

const ArticleCard: React.FC<props> = ({ article }) => {
  const date = getDateFromISO(article.publishedAt)
  const month = date.toLocaleString({ month: 'short'}); 

  const open = useCallback(() => {
    window.open(article.url, '_blank');
  }, [article]);

  return (
    <Card>
      <Div className="date">
        <h4>{date.day}</h4>
        <p>{month.toUpperCase()}</p>
      </Div>
      
      <ImageBlock 
        src={article.image} 
        height="220px"
        onClick={open}
      />

      <Div className="card-body">
        <h3>{ article.title }</h3>
        <Div className="tags">
          <Tag color="#c83d66">{ article.source.name }</Tag>
          <Tag color="#f51f5e">{ article.category.name }</Tag>
        </Div>
        <p>{ article.except }</p>
      </Div>
    </Card>
  )
}

export default ArticleCard
