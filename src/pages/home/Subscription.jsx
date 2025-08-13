import ShapeButton from "../../components/ShapeButton";
import ShapeInput from "../../components/ShapeInput";
export default function Subscription() {
  return (
    <div className="bg-light">
      <div
        style={{
          clipPath:
            "polygon(52% 0, 77% 2%, 100% 1%, 100% 98%, 59% 99%, 36% 97%, 0 99%, 0 0, 24% 2%)",
        }}
        className="bg-banner-subscription"
      >
        <div className="container max-w-[1520px] min-h-[394px] grid place-content-center py-8">
          <div className="grid lg:grid-cols-2 items-center gap-20">
            <div>
              <p className="text-white text-center lg:text-left text-3xl md:text-4xl font-semibold font-palanquin leading-[72px] xl:w-[80%]">
                From peaks to paths, explore the world through our curated
                updates.
              </p>
            </div>

            <div className="w-full">
              <form
                className="flex flex-col sm:flex-row gap-10 justify-center items-center lg:justify-start"
                action="#"
              >
                <div className="flex  gap-10">
                  <ShapeInput placeholder="Name" />
                  <ShapeInput placeholder="Email" />
                </div>

                <ShapeButton
                  className="group-hover:text-orange-400 hoverEffect"
                  name="SUBSCRIPTION"
                />
              </form>
              <p className="text-white text-sm mt-4 text-center lg:text-left">
                Get Travel Deals & Inspo in Your Inbox
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
