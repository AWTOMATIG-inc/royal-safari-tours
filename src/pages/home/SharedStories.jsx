import china from "../../assets/story/china.jpg";
import maldives from "../../assets/story/maldives.jpg";
import srilanka from "../../assets/story/srilanka.jpg";
import StoryCard from "../../components/StoryCard";
const stories = [
  { id: 1, image: china, country: "china" },
  { id: 2, image: maldives, country: "maldives" },
  { id: 3, image: srilanka, country: "srilanka" },
];
export default function SharedStories() {
  return (
    <div className="bg-body">
      <div className="container grid lg:grid-cols-[1fr_2fr] items-center gap-5 xl:gap-8 py-16">
        <div className="xl:w-[85%] text-center lg:text-left">
          <h4 className="text-3xl font-mansalva">
            Beautiful Destinations Await
          </h4>
          <h1 className="font-bold text-4xl xl:text-5xl mt-8 mb-14">
            Photos Taken. Stories Shared.
          </h1>
          <p>
            Whether you're chasing sunrises in Nepal, soaking in the culture of
            Sri Lanka, or joining a business expo in China, we craft tours that
            go far beyond the ordinary.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-8 lg:gap-4 xl:gap-8 mt-6 lg:mt-0">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
