// Generate a random rating from 1 to 5 with one decimal point
export const generateRandomRating = () => {
  return (Math.random() * 4 + 1).toFixed(1);
};
interface RatingProps {
  rating: number;
}
// Component for displaying star rating
export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  const stars = Array.from({ length: fullStars }, () => "★")
    .concat(hasHalfStar ? "⯪" : [])
    .concat(Array.from({ length: emptyStars }, () => "☆"));

  return (
    <div className="rating">
      <span className="rating__stars">{stars.join(" ")}</span>
      <div className="rating__number">
        {rating}
        <span>/5</span>
      </div>{" "}
    </div>
  );
};
