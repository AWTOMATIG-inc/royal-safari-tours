import story from "../assets/home/unnamed.jpg";
export default function StoryCard() {
  return (
    <div className="relative max-w-[400px]  max-h-[500px]  after:bg-orange-500/50 after:h-full after:w-full after:absolute after:top-0 after:left-0 after:z-10 overflow-hidden rounded-full after:translate-y-full hover:after:translate-y-0 after:transition-transform after:duration-300 cursor-pointer">
      <img src={story} alt="story" className="object-cover w-full h-full " />
      <h1 className="absolute left-1/2 -translate-x-1/2 bottom-18 md:bottom-24 z-20 text-white font-bold text-xl md:text-2xl xl:text-4xl">
        MALDIVES
      </h1>
    </div>
  );
}
