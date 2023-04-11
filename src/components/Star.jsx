import star from '/icon-star.svg';

export default function Star({ content, index }) {
  const indVariants = {
    0: 'md:-left-20',
    1: 'md:-left-10',
    2: 'md:left-0',
  };
  const ind = index;
  return (
    <div
      className={`${indVariants[ind]} relative rounded-xl p-3 bg-LightGrayishMagenta min-w-full flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10`}
    >
      <div className="flex">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <div>
        <p className="text-VeryDarkMagenta font-bold">{content}</p>
      </div>
    </div>
  );
}
