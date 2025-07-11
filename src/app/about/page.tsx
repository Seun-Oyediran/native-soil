import React from "react";

export default function Home() {
  return (
    <div className="pt-[65px] pb-14 flex flex-col gap-[3rem] justify-between h-full">
      <div className="flex flex-col gap-6">
        <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#232323]">
          The artist
        </p>
        <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#6E6E6E]">
          zari Olawale adio, Info, Sketchbook, logs
        </p>

        <p className="font-medium text-xs leading-[21px] tracking-[-1.32px] text-[#2C2C2C]">
          I’m Zari — an artist shaped by memory, migration, and identity. My
          work is rooted in the textures of West African life and the dissonance
          of living across worlds. I create to trace what’s been lost, to listen
          for the silences in stories passed down—or not passed at all. Through
          painting, sculpture, and mixed media, I explore the emotional
          landscapes of displacement: the fractures in families, the shifts in
          language, the rituals that remain even when home is far away. Much of
          my work is inspired by native West African philosophies that honour
          continuity, oral memory, and the unseen threads that bind us. I don’t
          create to mend the cracks, but to make space for them—to acknowledge
          what’s missing, and to let that absence speak.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-medium text-xs leading-[16px] tracking-[-1.32px] text-[#2C2C2C]">
          A son of the soil, true and through
        </p>

        <p className="font-medium text-xs leading-[16px] tracking-[-1.32px] text-[#2C2C2C]">
          89, Brockhampton, Liverpool. <br />
          where its always cloudy
        </p>
        <div className="flex flex-col">
          <a href="mailto:Olawale.adiostudios@gmail.com">
            <p className="font-medium text-xs leading-[16px] tracking-[-1.32px] text-[#2C2C2C]">
              E-mail
            </p>
          </a>
          <a href="tel:+447964565125">
            <p className="font-medium text-xs leading-[16px] tracking-[-1.32px] text-[#2C2C2C]">
              Telephone
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
