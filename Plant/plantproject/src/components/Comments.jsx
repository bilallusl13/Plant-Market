import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { motion } from 'framer-motion';

// Fotoğraflar
import lavender from '../photos/lavender.jpg';
import orchedia from '../photos/orchedia.webp';
import sunflower from '../photos/sunflower.jpg';

// Expand Button
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const cards = [
    {
      title: 'Lavender Bouquet',
      date: 'June 1, 2025',
      image: lavender,
      description: 'Our beautiful lavender bouquet brings calm and charm to any space. Perfect for relaxation.',
    },
    {
      title: 'Orchedia Elegance',
      date: 'June 2, 2025',
      image: orchedia,
      description: 'Orchedia is a symbol of beauty and grace. Ideal for gifting or home decoration.',
    },
    {
      title: 'Sunflower Brightness',
      date: 'June 3, 2025',
      image: sunflower,
      description: 'Sunflowers that light up your day! Bring sunshine indoors with this vibrant bouquet.',
    },
  ];

  return (
    <div className="flex flex-wrap gap-10 justify-center p-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="flower">
                  F
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.title}
              subheader={card.date}
            />
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                height: 200,
                width: '100%',
                objectFit: 'cover',
              }}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Details:</Typography>
                <Typography paragraph>
                  These flowers are hand-picked with care and freshness. Our collection suits every celebration.
                </Typography>
                <Typography paragraph>
                  Want to customize your bouquet? Contact us for special arrangements!
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
