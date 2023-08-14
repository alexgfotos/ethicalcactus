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
    var Iframe = React.createClass({     
  render: function() {
    return(         
      <div>          
        <iframe src={this.props.src} height={this.props.height} width={this.props.width}/>         
      </div>
    )
  }
});

ReactDOM.render(
  <Iframe src="http://plnkr.co/" height="500" width="500"/>,
  document.getElementById('example')
);
}

