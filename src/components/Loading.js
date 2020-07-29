import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import loadingGif from '../assets/loading.gif';

const Loading = () => {
  return (
    <>
      <Card className="text-center" body>
        <Image src={loadingGif}></Image>
        <h2 className="mt-4">Loading.....</h2>
      </Card>
    </>
  );
};

export default Loading;
