import { RIPDAO_DISCORD, RIPDAO_TWITTER } from "../constants/socials";

export default function RIPDAO() {
  return (
    <div class="bg-gradient-to-b from-black to-[#101335]">
      <div class="container mx-auto flex flex-col md:flex-row justify-center items-center h-100 min-h-[80vh]">
        <div class="overflow-hidden rounded-full border-secondary border-2 border-solid w-[100%] min-w-[200px] max-w-[200px] md:max-w-[400px] aspect-square my-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/ripdao.jpg`}
            class="object-cover"
          />
        </div>
        <div class="m-2 md:ml-10 flex flex-col justify-center items-center md:items-start text-center md:text-start">
          <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-shadow-custom-sm">
            RIPDAO
          </h2>
          <div>
            <span class="text-white">
              The cultivators of the unknown and tastemakers of the extreme, my
              RIPDAO is a vessel of good vibes to accomplish many tasks. A major
              goal of this DAO is to provide a foothold and haven for our
              extremely talented artists of Avalanche. Our mission focuses on
              building artists, leading the charge in web3 gaming and social
              activity, and fostering an ecosystem that freely allows creativity
              to become king. Join us in our endeavors easily by visiting our
              Discord. This Discord is also home to the lost denizens of the
              Analog Distortions with stickers, emojis, and a private channel
              just for you to listen to me ramble on about random things and tag
              you for reposts.
            </span>
            <div class="flex flex-row justify-center items-center text-primary">
              <a
                href={RIPDAO_DISCORD}
                class="px-4 py-2 m-2 border-primary border-solid border-2 hover:text-black hover:bg-primary"
              >
                Discord
              </a>
              <a
                href={RIPDAO_TWITTER}
                class="px-4 py-2 m-2 border-primary border-solid border-2 hover:text-black hover:bg-primary"
              >
                Twitter
              </a>
            </div>
          </div>
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
