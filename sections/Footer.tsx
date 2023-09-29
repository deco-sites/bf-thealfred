import Icon, { AvailableIcons } from "../components/ui/Icon.tsx";
import type { Image as DecoImage } from "deco-sites/std/components/types.ts";

interface Props {
  title?: {
    markedText?: string;
    text?: string;
  };
  firstParagraph?: string;
  secondParagraph?: string;
  thirdParagraph?: string;
  footerText?: string;
  picture?: DecoImage;
  socialMediaLinks?: {
    instagramURL: string;
    facebookURL: string;
    twitterURL: string;
    youtubeURL: string;
  };
}

export default function Footer({
  title = {
    markedText: "BLACK FRIDAY",
    text: "THE ALFRED",
  },

  firstParagraph =
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui justo,
  finibus nec lectus at, laoreet malesuada nibh. Suspendisse gravida
  eleifend lorem ac hendrerit. Cras et quam a ipsum commodo sollicitudin.
  Morbi volutpat convallis est, eget malesuada elit volutpat a. Duis
  auctor bibendum magna, eget consectetur ipsum dignissim in. Fusce
  finibus tellus id leo luctus, sed molestie sem rutrum. Ut vitae
  consectetur mi. Integer non aliquam eros. Nunc suscipit euismod turpis,
  ac sollicitudin neque pharetra ac. Aenean velit nibh, consequat sed
  mauris sed, convallis rutrum leo.`,

  secondParagraph =
    `In purus turpis, auctor non auctor eu, lobortis vitae ligula. Fusce
  fringilla tempus arcu, eu condimentum lorem ultrices vitae. Curabitur
  posuere sit amet urna a ultricies. Aliquam lacinia faucibus sagittis.
  Interdum et malesuada fames ac ante ipsum primis in faucibus.`,

  thirdParagraph =
    `Duis quis consequat orci. In scelerisque tempus augue, pellentesque
  ornare elit vulputate vel. Mauris maximus pretium hendrerit. Phasellus
  interdum est eget tortor consequat, vitae rhoncus dui lacinia.
  Suspendisse ut rhoncus dolor. Pellentesque nec sapien a nibh pulvinar
  ultricies.`,

  picture = "/thealfredlogo.png",

  footerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dui justo, finibus nec",

  socialMediaLinks = {
    instagramURL: "#",
    facebookURL: "#",
    twitterURL: "#",
    youtubeURL: "#",
  },
}: Props) {
  return (
    <section
      style={{
        backgroundImage:
          "url('/backgroundTexture.png'), linear-gradient(to top, #5b0d0d, #151111)",
      }}
      className="py-28 flex w-full justify-center items-center gap-8 flex-col px-[8vw]"
    >
      <p className="text-xl sm:text-3xl font-light text-white mb-4">
        <span class="font-bold">
          {title.markedText}
        </span>{" "}
        {title.text}
      </p>
      <p className="text-center text-sm font-ligh0t text-white">
        {firstParagraph}
      </p>
      <p className="text-center text-sm font-ligh0t text-white">
        {secondParagraph}
      </p>
      <p className="text-center text-sm font-ligh0t text-white">
        {thirdParagraph}
      </p>
      <div className="flex flex-col gap-10 items-center md:flex-row md:gap-0 w-full justify-between mt-12">
        <img src={picture} width="50px" />
        <p className="text-center text-sm font-ligh0t text-white">
          {footerText}
        </p>

        <div className="flex gap-2 items-center">
          <a href={socialMediaLinks.instagramURL}>
            <img
              class="text-white"
              src="/instagram.svg"
              height="20px"
              width="20px"
            />
          </a>
          <a href={socialMediaLinks.facebookURL}>
            <img
              class="text-white"
              src="/facebook.svg"
              height="10px"
              width="10px"
            />
          </a>
          <a href={socialMediaLinks.twitterURL}>
            <img
              class="text-white"
              src="/twitter.svg"
              height="20px"
              width="20px"
            />
          </a>
          <a href={socialMediaLinks.youtubeURL}>
            <img
              class="text-white"
              src="/youtube.svg"
              height="20px"
              width="20px"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
