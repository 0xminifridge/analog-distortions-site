export default function Minecraft() {
  return (
    <div class="relative w-screen h-[100vh]">
      <img
        src={`${process.env.PUBLIC_URL}/images/minecraft.png`}
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div class="absolute inset-0 container mx-auto flex flex-col justify-center items-center text-center py-10">
        <h2 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-shadow-custom-sm p-2">
          Minecraft
        </h2>

        <div class="text-center m-2 p-4 rounded-xl bg-opacity-70 bg-black">
          <span class="text-white">
            Join my world inside of the game of Minecraft. I have curated mods
            and texture packs to create a unique experience tailor made for
            Avalanche users. Build, create, and bring your images and style to
            an open world driven server created and maintained for you. Got
            beef? Fight it out in the real arena of AVAX.
          </span>
        </div>
        <h4 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-shadow-custom-sm p-2">
          To Join
        </h4>
        <div class="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4">
          <div class="text-center m-2 p-4 rounded-xl bg-opacity-70 bg-black">
            <span class="text-white">
              Java Edition
              <br />
              Choose Direct Connection in the Multiplayer menu and use{" "}
              <a
                href="minecraft.analogdistortions.com."
                target="_blank"
                class="no-underline text-secondary"
              >
                minecraft.analogdistortions.com.
              </a>
            </span>
          </div>
          <div class="text-center m-2 p-4 rounded-xl bg-opacity-70 bg-black">
            <span class="text-white">
              Bedrock/Mobile
              <br />
              IP Address: 142.44.170.35
              <br />
              Port: 25565
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
