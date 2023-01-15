import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

const Result = ({ data }) => {
  console.log(data);
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {data.map((property) => {
        return <PropertyCard key={property.id} cardData={property} />
      })}
    </Box>
  )
}

const PropertyCard = ({ cardData }) => {
  return (
    <Card sx={{maxWidth: 400, my: 2, maxHeight: 400}}>
    <CardMedia 
      component="img"
      alt={cardData.propertyType}
      height="50"
      image={cardData.image}
      sx={{objectFit: "contain", maxHeight: 400, maxWidth: 400}}
    />
      <Stack>
      <Typography variant="h7" color="initial" sx={{pb: 2, pl: 2, pt: 2}}>${cardData.price}/month</Typography>
      <Typography variant="h7" color="initial" sx={{pb: 2, pl: 2}}>{cardData.location}</Typography>
      <Typography variant="h7" color="initial" sx={{pb: 2, pl: 2}}>{cardData.propertyType}</Typography>
      </Stack>
    </Card>
  )
}

export default Result