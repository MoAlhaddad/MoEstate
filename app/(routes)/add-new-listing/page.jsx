import React from 'react'
import LandList from '@/app/_components/LandList';


function AddNewListing() {
    const lands = [
        {
          title: 'Sunset Valley',
          imageUrl: 'https://images.unsplash.com/photo-1568103261-ef3d86537394',
          description: 'A beautiful valley with stunning sunset views.',
          price: '$50,000',
        },
        {
          title: 'Green Meadow',
          imageUrl: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455',
          description: 'A spacious meadow perfect for farming.',
          price: '$75,000',
        },
        {
          title: 'Mountain Retreat',
          imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          description: 'A serene mountain retreat with breathtaking views.',
          price: '$60,000',
        },
        {
          title: 'Lakefront Paradise',
          imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          description: 'A peaceful piece of land near a beautiful lake.',
          price: '$55,000',
        },
        {
          title: 'Countryside Haven',
          imageUrl: 'https://images.unsplash.com/photo-1483389127117-39ee1f30b360',
          description: 'A charming countryside haven with plenty of space.',
          price: '$70,000',
        },
        {
          title: 'River Bend',
          imageUrl: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def',
          description: 'A lovely plot by a gentle river bend.',
          price: '$80,000',
        },
        {
          title: 'Hilltop Acreage',
          imageUrl: 'https://images.unsplash.com/photo-1507092349-e3f7f6a9c730',
          description: 'A large hilltop acreage with panoramic views.',
          price: '$90,000',
        },
        {
          title: 'Forest Edge',
          imageUrl: 'https://images.unsplash.com/photo-1483389127117-39ee1f30b360',
          description: 'A quiet spot on the edge of a dense forest.',
          price: '$65,000',
        },
        {
          title: 'Desert Oasis',
          imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          description: 'A tranquil desert oasis.',
          price: '$85,000',
        },
        {
          title: 'Coastal Dream',
          imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
          description: 'A piece of land with beautiful coastal views.',
          price: '$95,000',
        },
      ];
  return (
    <div className='p-10 flex flex-col gap-5 items-center justify-center'>
        <h2 className='font-bold text-2xl'> </h2>
        <div>
        <h2 className='font-bold text-2xl'>Add New Listing </h2>
            <h2 className='text-gray-500'>Enter Lot Address </h2>
            <h1>Available Lands</h1>
      <LandList lands={lands} />
            {/* <GooglePlacesAutocomplete apiKey="AIzaSyCxODTT2zAlLder9l5hFCL94MrUc0T0IzA" /> */}
        </div>
    </div>
  )
}

export default AddNewListing
