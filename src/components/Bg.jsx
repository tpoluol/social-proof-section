import mobileBg from '/bg-pattern-top-mobile.svg';
import mobileBg2 from '/bg-pattern-bottom-mobile.svg';
import desktopBg from '/bg-pattern-top-desktop.svg';
import desktopBg2 from '/bg-pattern-bottom-desktop.svg';
export default function Bg() {
  return (
    <div>
      <img
        src={mobileBg}
        alt="mobileBg"
        className="fixed top-0 left-0 -z-10 md:hidden block"
      />
      <img
        src={mobileBg2}
        alt="mobileBg"
        className="fixed bottom-0 right-0 -z-10 md:hidden block"
      />
      <img
        src={desktopBg}
        alt="desktopBg"
        className="fixed top-0 left-0 -z-10 hidden md:block"
      />
      <img
        src={desktopBg2}
        alt="desktopBg"
        className="fixed bottom-0 right-0 -z-10 hidden md:block"
      />
    </div>
  );
}
