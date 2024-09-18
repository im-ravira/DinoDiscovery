import { useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";

const Story = () => {
  const heading = useRef(null);
  const paragraph = useRef(null);
  useEffect(() => {
    gsap.to(heading.current, {
      x: 0,
      opacity: 1,
      delay: 0,
      duration: 1,
    });
    gsap.to(paragraph.current, {
      x: 0,
      opacity: 1,
      delay: 0.3,
      duration: 1,
    });
  });
  return (
    <main className="w-full flex flex-col bg-secondary bg-no-repeat bg-cover bg-fixed justify-center items-center min-h-screen text-white relative">
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      <section className="container max-w-6xl mx-auto px-5 lg:px-20 my-24 md:my-40 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-center opacity-0 -translate-x-20"
        ref={heading}>
          A Journey to <br /> the Land of Dinosaurs
        </h1>

        <div className="space-y-8 text-lg md:text-xl leading-relaxed opacity-0 -translate-x-20"
        ref={paragraph}>
          <p>
            ⏳ Millions of years ago, long before humans walked the Earth, giant
            creatures ruled the land, skies, and seas. These were the dinosaurs,
            ancient reptiles of all shapes and sizes, each with unique features
            that helped them survive in a wild, prehistoric world.
          </p>

          <p>
            🦖 In the dense forests of the Late Cretaceous period, the fearsome{" "}
            <strong>Tyrannosaurus Rex</strong>, or <em>T. rex</em>, prowled the
            land. With its massive jaws and bone-crushing teeth, the T. rex was
            a top predator. It towered over other dinosaurs, standing as tall as
            a two-story building, always ready to hunt or scavenge for its next
            meal.
          </p>

          <p>
            🌳 But not far away, <strong>Triceratops</strong> roamed peacefully,
            munching on ferns and shrubs. With three sharp horns and a giant
            frill on its head, this plant-eater was well-prepared to defend
            itself from any hungry T. rex that dared to attack. Its horns made
            it a mighty opponent in the battle for survival.
          </p>

          <p>
            🐾 In the open plains, small but swift{" "}
            <strong>Velociraptors</strong> darted through the tall grasses.
            These clever hunters worked together in packs, using their sharp
            claws and quick movements to take down prey. They were smaller than
            you might imagine, only about the size of a large bird, but what
            they lacked in size, they made up for in speed and intelligence.
          </p>

          <p>
            🦕 Meanwhile, in the warm forests of the Jurassic period, the gentle
            giant <strong>Brachiosaurus</strong> stretched its long neck to
            reach the tallest trees. It was so big that it could look down at
            other dinosaurs from high above. With each step, the ground shook
            under its immense weight, but all this giant wanted was to find
            enough leaves to eat and grow even bigger.
          </p>

          <p>
            🦴 Close by, a different dinosaur wandered, covered in thick, bony
            armor. <strong>Ankylosaurus</strong> looked like a living tank, with
            its heavy armor and a clubbed tail it used to defend itself. Even
            the mightiest predators thought twice before attacking this
            well-protected dinosaur.
          </p>

          <p>
            🐊 Far from the forests, near rivers and lakes, the unusual{" "}
            <strong>Spinosaurus</strong> splashed through the water, hunting
            fish and other creatures. This massive dinosaur had a long sail on
            its back and crocodile-like jaws perfect for catching slippery prey.
            It spent much of its time in the water, making it one of the few
            dinosaurs that could live both on land and in the water.
          </p>

          <p>
            🎺 High on the cliffs, with its long, curved head crest,{" "}
            <strong>Parasaurolophus</strong> called out to its herd. Scientists
            believe the crest acted like a trumpet, allowing the dinosaurs to
            communicate over long distances. As a plant-eater, it spent most of
            its time walking on four legs, but when needed, it could rise on two
            legs and run to escape danger.
          </p>

          <p>
            ⛰️ Mountain In the same era, the headstrong{" "}
            <strong>Pachycephalosaurus</strong> roamed the hills. It had a
            thick, dome-shaped skull, perfect for head-butting others in fights
            for territory or mates. Though not the largest dinosaur, it was
            certainly one of the toughest when it came to using its head – quite
            literally!
          </p>

          <p>
            👀 Lastly, the fearsome <strong>Allosaurus</strong> hunted during
            the Jurassic period. As a top predator, it used its sharp teeth and
            claws to hunt large prey like Stegosaurus. It was always on the
            lookout, using its sharp senses to track down its next meal.
          </p>

          <p>
            🌍 These incredible creatures lived in a world very different from
            our own. Each had special adaptations that helped them survive in
            their unique environments. From towering giants to small, swift
            hunters, dinosaurs ruled the Earth for millions of years before they
            mysteriously disappeared, leaving behind only fossils and stories
            for us to uncover.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Story;
