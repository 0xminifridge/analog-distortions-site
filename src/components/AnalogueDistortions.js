import {
  DistortionCardLandscape,
  DistortionCardPortrait,
} from "./DistortionCards";

export default function Collections() {
  const data = [
    {
      img: `${process.env.PUBLIC_URL}/images/ad/Ascension.gif`,
      name: "Ascension",
    },
    {
      img: `${process.env.PUBLIC_URL}/images/ad/Reflections.gif`,
      name: "Reflections",
    },
    { img: `${process.env.PUBLIC_URL}/images/ad/The-Maw.gif`, name: "The Maw" },
  ];
  return (
    <div class="relative w-screen h-[100vh]">
      <img
        src={`${process.env.PUBLIC_URL}/images/cover-preview.png`}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div class="absolute inset-0 container mx-auto flex flex-col justify-center items-center text-center py-10">
        <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-shadow-custom-sm p-2">
          Analog Distortions
        </h2>
        <div class="flex flex-row justify-center items-center">
          <div class="flex flex-col justify-center items-center">
            <DistortionCardLandscape
              img={`${process.env.PUBLIC_URL}/images/ad/Ascension.gif`}
              name={"Ascension"}
            />
            <DistortionCardLandscape
              img={`${process.env.PUBLIC_URL}/images/ad/Wards.gif`}
              name={"Wards"}
            />
          </div>
          <div class="hidden md:flex">
            <DistortionCardPortrait
              img={`${process.env.PUBLIC_URL}/images/ad/Reflections.gif`}
              name={"Reflections"}
            />
          </div>
          <div class="flex flex-col justify-center items-center">
            <DistortionCardLandscape
              img={`${process.env.PUBLIC_URL}/images/ad/Imposters.gif`}
              name={"Imposters"}
            />
            <DistortionCardLandscape
              img={`${process.env.PUBLIC_URL}/images/ad/The-Maw.gif`}
              name={"The Maw"}
            />
          </div>

          {/* {data.map((item, index) => {
            return (
              <div
                key={index}
                class="mx-4 rounded-lg border-2 border-solid border-secondary overflow-hidden box-shadow-custom bg-black"
              >
                <div class="w-full max-w-[400px] h-full max-h-[400px] aspect-square overflow-hidden">
                  <img src={item?.img} alt={item?.name} class="object-cover" />
                </div>
                <div class="text-primary text-center">
                  <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    {item?.name}
                  </span>
                </div>
              </div>
            );
          })} */}
        </div>
        <div class="text-center m-2 p-4 rounded-xl bg-opacity-70 bg-black">
          <span class="text-white">
            Welcome to Analog Distortions. You have arrived to the City to
            embark on a journey of the mind. The inhabitants of a lost megacity
            in a dreary realm of existence haunted by memories, tribulations,
            and fatigue await you. Each distorted hooded figure represents the
            challenges we face here and the personified trials of purgatory. In
            this dystopian megacity, the denizens and settings take center stage
            as each distortion has to find it is way on its own path. The
            barrier of tangible and intangible are blurred with each piece. Will
            you overcome the trials of the City or become an inhabitant?
          </span>
        </div>
      </div>
    </div>
  );
}
