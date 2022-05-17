import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loader = () => (
  <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
    <FadeLoader color="#155e75" height={15} width={5} margin={2} radius={2} />
  </div>
);

export default Loader;
