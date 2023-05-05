import ReactPlayer from "react-player";

const Videos = () => {
    return(
        <div>
            <div>
                <h1 class='text-center text-[35px] mb-[20px]'>Watch our latest videos</h1>
            </div>
            <div class='mb-[40px] w-full relative justify-center mx-auto ml-[10%] md:h-[500px] h-[200px] mt-[50px] md:mt-0'>
            <ReactPlayer
            url='https://www.youtube.com/watch?v=dnAViPJX-Cc'
            controls
            loop
            width='80%'
            height='100%'
            />
            </div>
        </div>
    )
};

export default Videos;