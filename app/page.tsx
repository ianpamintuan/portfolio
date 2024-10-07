import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">Hello!</h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a passionate web developer dedicated to transforming ideas into
          dynamic, user-friendly websites. With expertise in modern technologies
          and a keen eye for design, I strive to create engaging digital
          experiences that not only look great but function flawlessly. Let's
          delve into my work and explore how I can help bring your vision to
          life.
        </p>
      </div>
    </section>
  );
}
