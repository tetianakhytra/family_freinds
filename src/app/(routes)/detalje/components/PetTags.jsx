export default function PetTags({ tags = [], category, rating, availability }) {
  // Make a list of tags we want to show
  const ratingTag = rating ? `⭐ ${rating.toFixed(1)}` : null;
  const allTags = [...tags, category, availability, ratingTag].filter(Boolean);

  // Remove duplicates (like "beauty" twice)
  const uniqueTags = [...new Set(allTags)].slice(0, 4); // max 4 tags

  // Choose colors for some known tags
  const colorMap = {
    beauty: "bg-[#EDA8B3] text-[#6B8B42]",
    mascara: "bg-[#ACD7FF] text-[#6B8B42]",
    "in stock": "bg-[#C5E59C] text-[#6B8B42]",
    "out of stock": "bg-[#F1E689] text-[#6B8B42]",
  };

  return (
    <div className="flex gap-2 mt-2 flex-wrap">
      {uniqueTags.map((tag, index) => {
        const key = tag.toLowerCase();
        const color = colorMap[key] || "bg-[#F1E689] text-[#6B8B42]"; // default color
        return (
          <span
            key={index}
            className={`px-3 py-2 rounded-full text-[13px] font-medium ${color}`}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
