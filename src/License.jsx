import React from "react";

export default function LicensePage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-10 text-gray-800">
      <h1 className="text-4xl font-bold text-pink-600">License & Attribution</h1>

      <p>
        This site uses various images under Creative Commons and GNU Free Documentation License (GFDL) terms.
        All images have been cropped for layout consistency. Below is a list of sources and license info for each image.
      </p>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-pink-500">📸 Home Page</h2>
        <p className="mb-2">
          The home page features a background image of a beautiful sunset, which is licensed under{" "}
          <a
            href="https://wallpaperdelight.com/wallpapers/aesthetic-beach-wallpaper/"
            className="text-blue-600 underline"
            target="_blank" rel="noopener noreferrer"
          >
            Wallpaper Delight (CC BY-ND 4.0)
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-pink-500">🎭 Actor Photos</h2>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>Jeff Bridges</strong> –{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Jeff_Bridges_%2836124189785%29.jpg"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 2.0)
          </li>
          <li>
            <strong>Tim Allen</strong> –{" "}
            <a
              href="https://citaty-slavnych.sk/autori/tim-allen/"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Citaty Slavnych
            </a>{" "}
            (CC BY-SA 2.0)
          </li>
          <li>
            <strong>Kevin Costner</strong> –{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Kevin_Costner_at_81st_Venice_Film_Festival_%28cropped%29.jpg"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 4.0)
          </li>
          <li>
            <strong>Harrison Ford</strong> –{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Harrison_Ford_2017.jpg"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 3.0)
          </li>
          <li>
            <strong>Liam Neeson</strong> –{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Liam_Neeson_Deauville_2012_2.jpg"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 3.0)
          </li>
          <li>
            <strong>Gary Oldman</strong> –{" "}
            <a
              href="https://commons.wikimedia.org/wiki/File:Gary_Oldman_%2813925515511%29_%28cropped%29.jpg"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikimedia Commons
            </a>{" "}
            (CC BY-SA 2.0)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-pink-500">📚 Character Images (GFDL)</h2>
        <p className="mb-2">
          These images are sourced from various fandom wikis and licensed under the GNU Free Documentation License (GFDL).
        </p>
        <ul className="space-y-2 list-disc pl-6">
          <li>
            <strong>Annabeth Chase</strong> –{" "}
            <a
              href="https://riordan.fandom.com/wiki/Annabeth_Chase/Disney%2B"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Riordan Wiki
            </a>
          </li>
          <li>
            <strong>Candace Flynn</strong> –{" "}
            <a
              href="https://phineasandferb.fandom.com/wiki/Candace_Flynn"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Phineas and Ferb Wiki
            </a>
          </li>
          <li>
            <strong>Katniss Everdeen</strong> –{" "}
            <a
              href="https://unofficial-hunger-games.fandom.com/wiki/Katniss_Everdeen"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Unofficial Hunger Games Wiki
            </a>
          </li>
          <li>
            <strong>Luisa Madrigal</strong> –{" "}
            <a
              href="https://disney.fandom.com/wiki/Luisa_Madrigal"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Disney Wiki
            </a>
          </li>
          <li>
            <strong>Meena (Sing)</strong> –{" "}
            <a
              href="https://universalstudios.fandom.com/wiki/Meena"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Universal Studios Wiki
            </a>
          </li>
          <li>
            <strong>Padmé Amidala</strong> –{" "}
            <a
              href="https://en.wikipedia.org/wiki/Padm%C3%A9_Amidala"
              className="text-blue-600 underline"
              target="_blank" rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6 mb-2 text-pink-500">📖 Bible Verse Images</h2>
        <p>
          All verse images are sourced from the <strong>YouVersion Bible App</strong>'s{" "}
          <em>Verse of the Day</em> image series. These are publicly available for sharing and personal use.
        </p>
      </section>

      <p className="text-sm mt-10 italic text-gray-500">
        All images have been cropped from their original versions for visual consistency.
      </p>

      <p className="text-sm mt-4 text-gray-500">
        Portions of this site incorporate content licensed under the{' '}
        <a
            href="https://www.gnu.org/licenses/fdl.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
        >
            GNU Free Documentation License
        </a>. A copy of the license is available at that link.
      </p>

    </div>
  );
}
