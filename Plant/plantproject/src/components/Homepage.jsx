import React from 'react';
import Button from '@mui/material/Button';
import { yellow } from '@mui/material/colors';
import { RiLeafFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import plant from '../photos/plantt.webp'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import Stack from '@mui/material/Stack';
import img2 from '../photos/img2.avif';
import { motion } from 'framer-motion';
import delivery from '../photos/delivery.jpg'
import payment from '../photos/payment.png';

function Homepage() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Sol Bölüm */}
        <div className='bg-green-900 text-white p-4 w-1/2'>

          <div className='my-10 mt-20'>
            <motion.h2
              className='text-4xl'
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-yellow-400">Plants</span> Make An Environment
            </motion.h2>

            <motion.h3
              className='text-4xl'
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              Positive <span className='text-yellow-400'>Impact</span> On
            </motion.h3>

            <motion.h3
              className='text-4xl'
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            >
              Your Environment
            </motion.h3>

            <motion.p
              className='mt-10'
              style={{
                fontFamily: "'Edu NSW ACT Cursive', cursive",
                fontWeight: 400,
              }}
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              Plants not only beautify your surroundings, but they also improve air quality,
              reduce stress levels, and enhance your mood. Having greenery around you can
              create a peaceful environment, helping you feel more connected to nature.
              Indoor plants like ferns, peace lilies, and spider plants are known to purify
              the air and add life to any space. Whether at home or in the office, adding a
              touch of green can make a big difference in your daily well-being.
            </motion.p>

            <div className='mt-10 flex gap-4 ml-7 font-mono'>
              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Button
                  className='shadow-2xl hover:bg-yellow-300'
                  variant="contained"
                  sx={{ backgroundColor: yellow[700], color: 'white' }}
                  endIcon={<RiLeafFill />}
                >
                  Buy It
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              >
                <Button
                  className='shadow-2xl hover:bg-yellow-300'
                  variant="contained"
                  sx={{ backgroundColor: yellow[700], color: 'white' }}
                  endIcon={<IoIosInformationCircle />}
                >
                  More Info
                </Button>
              </motion.div>
            </div>

            <div className='mt-10 ml-10'>
              <Stack direction="row" spacing={2}>
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                >
                  <FacebookIcon className='hover:bg-blue-600 shadow-lg rounded-full cursor-pointer' />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <LinkedInIcon className='hover:bg-blue-600 shadow-lg rounded-full cursor-pointer' />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <TwitterIcon className='hover:bg-blue-600 shadow-lg rounded-full cursor-pointer' />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <InstagramIcon className='hover:bg-purple-600 shadow-lg rounded-full cursor-pointer' />
                </motion.div>
              </Stack>
            </div>
          </div>
        </div>

        {/* Sağ Görsel Bölüm */}
        <div className='bg-green-900 text-white w-1/2 flex items-center justify-center animate-fade-in'>
          <motion.img
            src={img2}
            alt="plant"
            className="mb-20 rounded-lg"
            style={{ width: 600, height: 600 }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>
      {/* Sayfanın altında, alt alta gözükmesi için buraya Card div'i koyduk */}
<div className="w-full h-[400px] pt-5 bg-gradient-to-b from-yellow-400 to-green-600">

  <Stack direction='row' justifyContent='space-between' sx={{ px: 5 }}>
    
    {/* Kargo Kartı */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={delivery}
        title="Fast Delivery"
      />
      <CardContent className='mt-5'>
        <Typography gutterBottom variant="h5" component="div">
          Fast Delivery
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Get your plants delivered quickly and safely to your door with our reliable express shipping.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Track</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    {/* Bitki Kartı */}
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={plant}
        title="Healthy Plants"
      />
      <CardContent className='mt-5'>
        <Typography gutterBottom variant="h5" component="div">
          Healthy Plants
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Explore a variety of fresh and healthy plants carefully nurtured to thrive in your space.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">See More</Button>
      </CardActions>
    </Card>

    {/* Ödeme Kartı */}
    <Card sx={{ maxWidth: 345, marginRight: 2 }}>
      <CardMedia 
        sx={{ height: 140 }}
        image={payment}
        title="Secure Payment"
      />
      <CardContent className='mt-5'>
        <Typography gutterBottom variant="h5" component="div">
          Secure Payment
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Enjoy safe and easy checkout with multiple secure payment options including credit cards and more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Pay Now</Button>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    
  </Stack>
</div>

    </>
  );
}

export default Homepage;
