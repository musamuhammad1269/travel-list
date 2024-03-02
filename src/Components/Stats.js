export default function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <em>Start Adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {packedPercentage === 100 ? (
        "You are ready to GO ✈ "
      ) : (
        <em>
          🙈 You have {numItems} items in your list, and you already packed{" "}
          {numPacked} ({packedPercentage}%) &#128075;
        </em>
      )}
    </footer>
  );
}
