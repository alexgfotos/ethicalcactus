import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';


export default function Home() {
    return (
        <div>
            <CardMedia
          component="img"
          alt="A guide on avoiding poached plants"
          width= "90%"
          image="/images/poster.jpg"
          title="Ethical cactus and succulent collecting guide"
          >
        </CardMedia>
        </div>
    )
}
