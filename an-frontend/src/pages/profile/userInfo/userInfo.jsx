import Card from '@mui/material/Card'
import * as React from 'react';
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import Collapse from '@mui/material/Collapse'
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';


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

export default function RecipeReviewCard({ user }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 340, width: '500px', minBlockSize: '580px', display:'flex', flexDirection:'column', margin: '15px'}}>
      <CardHeader
        sx={{margin: 0}}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            { (user.name).charAt(0).toUpperCase() }
          </Avatar>
        }
        title={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
              <h3>{(user.name).charAt(0).toUpperCase() + (user.name.slice(1))}</h3> 
              </Typography>}
        subheader={<Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
                  <h3>{(user.lastname).charAt(0).toUpperCase() + (user.lastname.slice(1))}</h3> 
                  </Typography>}
      />
      <CardContent>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Email: </h3> <p>{ user.email }</p> 
        </Typography>
        <Typography sx={{isplay: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Phone Number:: </h3> <p>{ user.phone }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
           <h3>ID Number:: </h3> <p>{ user.idNumber }</p> 
        </Typography>
        <Typography sx={{display: 'flex', flexDirection:'column', justifyContent:'space-around'}} variant="body2" color="text.secondary">
          <h3>Role: </h3> <p>{(user.role).charAt(0).toUpperCase() + (user.role.slice(1))}</p> 
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}