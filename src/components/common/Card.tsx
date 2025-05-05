import { cn } from "../../../lib/utils";

type PhotoType = "PLINKO" | "BOMBS" | "DICE" | "LOTTERY";

const PHOTO_URLS: Record<PhotoType, string> = {
    PLINKO: "https://casinogame.casino/uploads/auto/1721919750453481376.png",
    DICE: "https://play-lh.googleusercontent.com/ycb45SOcSD3xxLGqpJUXzssyhAoRcy9HPUOWGp-5j5Yj484YPutyTl9sa0WhB9lLyiE",
    BOMBS: "https://www.gamingcorps.com/wp-content/uploads/2023/05/CM2_Portfolio-Thumbnail.jpg",
    LOTTERY: "https://play-lh.googleusercontent.com/ieLC3fRvJ-lIGNcei4TF4l0RBWu_04kpNI9GIQXa3-W24sJ1m5XwwkrN0mIutyrihA",
};

interface CardProps {
    type: PhotoType,
    title: string,
    description: string
}

const Card: React.FC<CardProps> = ({type, title, description}) => {
    const imageUrl = PHOTO_URLS[type];
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          `bg-[url(${imageUrl})] bg-cover`
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;