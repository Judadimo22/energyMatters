import ReactPlayer from "react-player";
import recommendedVideo from '../../videos/recommendedVideo.mp4'

const Recommended = () => {
    return(
        <div className='md:flex block justify-between md:mx-[100px]'>
            <div className="md:w-[50%] w-full">
            <div>
                <h1 class='text-center text-[35px] mb-[20px]'>Our Recommended of the month</h1>
            </div>
            <div class='mb-[40px] w-full relative justify-center mx-auto ml-[10%] md:h-[400px] md:bottom-[20px] h-[200px] mt-[50px] md:mt-0'>
            <ReactPlayer
            url={recommendedVideo}
            controls
            loop
            width='80%'
            height='100%'
            />
            </div>
        </div>
                <div className="md:w-[50%]">
                <div>
                    <h1 class='text-center text-[35px] mb-[20px]'>Watch our latest videos</h1>
                </div>
                <div class='mb-[40px] w-full relative justify-center mx-auto ml-[10%] md:h-[333px] md:top-[50px]  h-[200px] mt-[50px] md:mt-0'>
                <ReactPlayer
                url='https://www.youtube.com/watch?v=dnAViPJX-Cc'
                controls
                loop
                width='80%'
                height='100%'
                />
                </div>
            </div>
        </div>
    )
};

export default Recommended;