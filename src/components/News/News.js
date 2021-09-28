import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
const {title, author, decsription , urlToImage} =props.article;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        }
        title={title}
        subheader={author}
      />
      <CardMedia
        component="img"
        height="194"
        image={urlToImage}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {decsription}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
};

export default News;