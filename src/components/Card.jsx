import Star from './Star.jsx';
import Profile from './Profile.jsx';
import datas from '../data.js';
import { useState } from 'react';
export default function Card() {
  let [data, setData] = useState(datas);
  const starComp = [
    {
      content: 'Rated 5 Stars in Reviews',
    },
    {
      content: 'Rated 5 Stars in Report Guru',
    },
    {
      content: 'Rated 5 Stars in BestTech',
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:gap-15">
      <div className="md:flex md:flex-row md:max-w-[800px] md:min-w-full md:gap-60">
        <div className="flex flex-col gap-4 md:flex-1 text-center md:text-start">
          <div className="flex">
            <p className="mt-12 mx-10 text-5xl font-bold text-VeryDarkMagenta md:mt-0 md:mx-0">
              10,000+ of our users love our products.
            </p>
          </div>
          <div className="flex my-6 md:my-0">
            <p className="text-DarkGrayishMagenta">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-1 md:justify-center">
          {starComp.map((a, index) => {
            console.log(a);
            return <Star content={a.content} key={index} index={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:w-full">
        {data.map((data, index) => {
          return <Profile data={data} key={index} index={index} />;
        })}
      </div>
    </div>
  );
}
