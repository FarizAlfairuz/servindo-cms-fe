import React, { useMemo } from 'react';
import checkURL from '../../../../helpers/checkURL';

const ImageForm = (props) => {
  const { error, label, name, register, watchImage } = props;

  const imageURL = useMemo(() => {
    if (typeof watchImage === 'string' && checkURL(watchImage))
      return watchImage;
    if (watchImage && watchImage.length > 0 && typeof watchImage !== 'string') {
      return URL.createObjectURL(watchImage[0]);
    }

    return '';
  }, [watchImage]);

  return (
    <div className="flex flex-col space-y-2">
      <div className="font-normal">{label}</div>
      {/* Image Preview */}
      <div className="w-full h-52 flex align-middle justify-center aspect-auto bg-gray-100 rounded-lg overflow-hidden">
        <img className="object-contain" src={imageURL} alt="" />
      </div>
      {/* Choose File */}
      <div className={`block border-2 rounded-lg ${error && 'border-red-600'}`}>
        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          {...register(name)}
          className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-l-md file:border-0
            file:text-sm file:font-semibold
            file:bg-cyan-800 file:text-white
            file:cursor-pointer hover:file:bg-cyan-700
            focus:outline-none focus:border-cyan-800 focus:ring-1 focus:ring-cyan-800
            focus:rounded-lg
                "
        />
      </div>
      <p className={`text-xs text-red-600 ${error && '-mb-4'}`}>
        {(error && error.message) || ''}
      </p>
    </div>
  );
};

export default ImageForm;
