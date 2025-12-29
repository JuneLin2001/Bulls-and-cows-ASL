import ASL_0 from "@/assets/ASLNumbers/ASL_0.png";
import ASL_1 from "@/assets/ASLNumbers/ASL_1.png";
import ASL_2 from "@/assets/ASLNumbers/ASL_2.png";
import ASL_3 from "@/assets/ASLNumbers/ASL_3.png";
import ASL_4 from "@/assets/ASLNumbers/ASL_4.png";
import ASL_5 from "@/assets/ASLNumbers/ASL_5.png";
import ASL_6 from "@/assets/ASLNumbers/ASL_6.png";
import ASL_7 from "@/assets/ASLNumbers/ASL_7.png";
import ASL_8 from "@/assets/ASLNumbers/ASL_8.png";
import ASL_9 from "@/assets/ASLNumbers/ASL_9.png";

interface ASLPlaceholderProps {
  num: number;
}

const ASLPlaceholder: React.FC<ASLPlaceholderProps> = ({ num }) => {
  const aslImages: Record<number, string> = {
    0: ASL_0,
    1: ASL_1,
    2: ASL_2,
    3: ASL_3,
    4: ASL_4,
    5: ASL_5,
    6: ASL_6,
    7: ASL_7,
    8: ASL_8,
    9: ASL_9,
  };

  return (
    <>
      <div className="group relative flex h-10 w-10 items-center justify-center rounded-md bg-gray-700/50">
        <img
          src={aslImages[num]}
          alt={`ASL sign for ${num}`}
          className="h-9 w-9 object-contain transition-all duration-300 group-hover:fixed group-hover:top-1/2 group-hover:left-1/2 group-hover:z-50 group-hover:h-64 group-hover:w-64 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:bg-white"
        />
        <div className="pointer-events-none fixed inset-0 z-40 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </>
  );
};

export default ASLPlaceholder;
