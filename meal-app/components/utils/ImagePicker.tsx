"use client"
import Image from "next/image";
import React, { useRef, useState, ChangeEvent } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePickImage = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const fileUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div>
      <label htmlFor={name} className="pb-2 block text-white">
        {label}
      </label>
      <div>
        <div className="relative w-52 h-52 border-2 border-white mb-6">
          {!pickedImage ? (
            <p className="text-white text-center absolute inset-0 flex items-center justify-center">
              Please Choose Image!
              <br />
              Not Picked Yet!
            </p>
          ) : (
            <Image
              src={pickedImage}
              alt="uploaded file"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
        <input
          className="hidden"
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputRef}
          onChange={fileUploadHandler}
          required
        />
        <button
          className="text-white bg-yellow-800 p-2 rounded-md"
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}