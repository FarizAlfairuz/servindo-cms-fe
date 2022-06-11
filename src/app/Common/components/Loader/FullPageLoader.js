import React from 'react';
import { FadeLoader } from 'react-spinners';

const FullPageLoader = () => (
  <div className="relative z-50">
    <div className="fixed inset-0 bg-black bg-opacity-40" />
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex flex-col min-h-full items-center justify-center p-4 text-center">
        <FadeLoader color="white" height={15} width={5} margin={2} radius={2} />
      </div>
    </div>
  </div>
);

export default FullPageLoader;
