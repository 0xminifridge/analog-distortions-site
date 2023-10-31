export default function Journey() {
  return (
    <div class="bg-gradient-to-b from-black via-primary to-black">
      <div class="container mx-auto flex flex-col md:flex-row justify-center items-center h-100 min-h-[80vh]">
        <div class="overflow-hidden rounded-full border-secondary border-2 border-solid w-[100%] min-w-[200px] max-w-[200px] md:max-w-[400px] aspect-square my-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/wrathtank.gif`}
            class="object-cover"
          />
        </div>
        <div class="m-2 md:ml-10 flex flex-col justify-center items-center md:items-start text-center md:text-start">
          <h2 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-shadow-custom-sm">
            I am Wrath
          </h2>
          <span class="text-white">
            I am a glitch, horror, and AI artist on Avalanche exploring the
            ether to establish stories and creativity as the norm. Join me in my
            path discovering what the City has to offer. Many will know my
            existence from X, but you will find me hovering around the RIPDAO,
            Doggerinos, and Raffllrr trying to bring humor and good vibes
            wherever I go. All of my relevant links can be found below as well
            as in my{" "}
            <a
              class="no-underline text-secondary"
              href="https://linktr.ee/wrathtank"
              target="_blank"
            >
              linktree
            </a>
            .
          </span>
        </div>

        {/* {data?.map((item, index) => {
    return (
      <div class="">
        <span>{item}</span>
      </div>
    );
  })} */}
      </div>
    </div>
  );
}
