import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import retry from '../../assets/icons/retry.png';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from './Uploadfile';
import filledcamera from '../../assets/icons/filledcamera.svg';

type FrontcamProps = {
    handleRetake: (input: string) => void;
    imageVal: any;
};
const Frontcam = ({ handleRetake, imageVal }: FrontcamProps) => {
    const { image, setImage, setCameraType } = useStore();
    console.log('imagesVal inside', imageVal);

    return (
        <>
            <div className="w-full justify-center flex h-[190px]">
                <img src={imageVal || image} alt="screenshot" className="rounded-[10px] w-full" />
            </div>
            <span className="flex flex-col justify-end items-end mt-3 ">
                <ButtonGlobal onClick={handleRetake} className="cam_btn">
                    <>
                        <img src={retry} alt="retry_icon" className="w-[16px] h-[16px]  mr-1" /> Re-Capture
                    </>
                </ButtonGlobal>
            </span>
        </>
    );
};

export default Frontcam;
