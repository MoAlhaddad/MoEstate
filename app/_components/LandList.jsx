import Image from 'next/image';

const LandList = ({ lands }) => {
  return (
    <div>
      {lands.map((land, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h2>{land.title}</h2>
          <Image
            src={land.imageUrl}
            alt={land.title}
            width={500}
            height={300}
            objectFit="cover"
          />
          <p>{land.description}</p>
          <p>{land.price}</p>
        </div>
      ))}
    </div>
  );
};

export default LandList;