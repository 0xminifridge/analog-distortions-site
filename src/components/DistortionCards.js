export function DistortionCardLandscape({ img, name }) {
  return (
    <div class="m-4 rounded-lg border-2 border-solid border-secondary overflow-hidden box-shadow-custom bg-black relative">
      <div class="w-full max-w-[400px] overflow-hidden">
        <img src={img} alt="Distortion Card" class="object-cover" />
      </div>
      <div class="text-secondary text-center absolute bottom-0 right-2">
        <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-outline">
          {name}
        </span>
      </div>
    </div>
  );
}

export function DistortionCardPortrait({ img, name }) {
  return (
    <div class="mx-4 rounded-lg border-2 border-solid border-secondary overflow-hidden box-shadow-custom bg-black relative">
      <div class="w-full max-w-[400px] h-full max-h-[400px] aspect-square overflow-hidden">
        <img src={img} alt="Distortion Card" class="object-cover" />
      </div>
      <div class="text-secondary text-center absolute bottom-0 left-0 right-0">
        <span class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-outline">
          {name}
        </span>
      </div>
    </div>
  );
}
