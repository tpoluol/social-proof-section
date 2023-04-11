export default function Profile({ data, index }) {
  const imgVariants = {
    Colton: 'image-colton.jpg',
    Irene: 'image-irene.jpg',
    Anne: 'image-anne.jpg',
  };

  const indVariants = {
    0: 'md:top-0',
    1: 'md:top-5',
    2: 'md:top-10',
  };
  const imgV = data.img;
  const ind = index;
  return (
    <div
      className={`flex flex-col bg-VeryDarkMagenta rounded-xl p-7 gap-3 md:max-w-[350px] relative ${indVariants[ind]}`}
    >
      <div className="w-full flex flex-row items-center gap-5">
        <img
          src={imgVariants[imgV]}
          alt="img"
          className="rounded-full w-[40px]"
        />
        <div>
          <p className="text-white">{data.name}</p>
          <p className="text-SoftPink">{data.subtitle}</p>
        </div>
      </div>
      <div>
        <p className="text-white">{data.opinion}</p>
      </div>
    </div>
  );
}
