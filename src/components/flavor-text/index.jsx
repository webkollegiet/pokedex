import "./flavor-text.css";

export default function FlavorText({flavor_text_entries}) {
  const flavorTextEnglish = flavor_text_entries
    .filter(entry => entry.language.name === "en")
    .map(entry => entry.flavor_text.replace(/\n/g, " ").replace(/\f/g, " "))

  return (
    <p className="flavorText">{flavorTextEnglish[Math.floor(Math.random() * flavorTextEnglish.length)]}</p>
  );
}