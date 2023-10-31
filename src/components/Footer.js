import { DiscordIcon, FacebookIcon, TwitterIcon } from "../constants/icons";
import {
  AD_HYPERSPACE,
  AD_JOEPEGS,
  AD_SALVOR,
  DOGGERINOS_SITE,
  MINECRAFT_LINK,
  RIPDAO_DISCORD,
  RIPDAO_MARKETPLACE,
  RIPDAO_TWITTER,
  WRATH_TWITTER,
} from "../constants/socials";

export default function Footer() {
  return (
    <footer class="bg-black">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 text-primary">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
              <span class="self-center text-center text-2xl font-semibold whitespace-nowrap hover:text-white">
                Analog <br /> Distortions
              </span>
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">
                Analog Distortions
              </h2>
              <ul class="font-medium">
                <li class="mb-4">
                  <a
                    href={AD_HYPERSPACE}
                    target="_blank"
                    class="hover:underline"
                  >
                    Hyperspace
                  </a>
                </li>
                <li class="mb-4">
                  <a href={AD_SALVOR} target="_blank" class="hover:underline">
                    Salvor
                  </a>
                </li>
                <li class="mb-4">
                  <a href={AD_JOEPEGS} target="_blank" class="hover:underline">
                    Joepegs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase">RIPDAO</h2>
              <ul class="font-medium">
                <li class="mb-4">
                  <a
                    href={RIPDAO_TWITTER}
                    target="_blank"
                    class="hover:underline"
                  >
                    TWITTER
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={RIPDAO_DISCORD}
                    target="_blank"
                    class="hover:underline"
                  >
                    DISCORD
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={RIPDAO_MARKETPLACE}
                    target="_blank"
                    class="hover:underline"
                  >
                    MARKET
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase ">WRATH</h2>
              <ul class="font-medium">
                <li class="mb-4">
                  <a
                    href={WRATH_TWITTER}
                    target="_blank"
                    class="hover:underline"
                  >
                    Twitter
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={MINECRAFT_LINK}
                    target="_blank"
                    class="hover:underline"
                  >
                    Minecraft
                  </a>
                </li>
                <li class="mb-4">
                  <a
                    href={DOGGERINOS_SITE}
                    target="_blank"
                    class="hover:underline"
                  >
                    Doggerinos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-primary sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm sm:text-center ">
            © 2023{" "}
            <a href="/" class="hover:underline">
              Analog Distortions
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href={RIPDAO_DISCORD} class="text-primary hover:text-white">
              <DiscordIcon />
              <span class="sr-only">Discord community</span>
            </a>
            <a href={WRATH_TWITTER} class="text-primary hover:text-white">
              <TwitterIcon />
              <span class="sr-only">Twitter page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
