import StoryCard from "../../components/StoryCard";

export default function SharedStories() {
  return (
    <div className="bg-body">
      <div className="container grid md:grid-cols-[1fr_2fr] items-center gap-8 py-16">
        <div className="lg:w-[85%] text-center md:text-left">
          <h4 className="text-3xl font-mansalva">
            Beautiful Destinations Await
          </h4>
          <h1 className="font-bold text-5xl mt-8 mb-14">
            Photos Taken. Stories Shared.
          </h1>
          <p>
            Whether you're chasing sunrises in Nepal, soaking in the culture of
            Sri Lanka, or joining a business expo in China, we craft tours that
            go far beyond the ordinary.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          <StoryCard />
          <StoryCard />
          <StoryCard />
        </div>
      </div>
    </div>
  );
}
