const Nav = () => {
  return (
    <div className=" text-fillText rounded-t-xl relative">
      <div className="flex flex-row gap-2 py-2 px-2">
        <button className="h-5 w-5 bg-navRed rounded-full hover:brightness-75" />
        <button className="h-5 w-5 bg-navYellow rounded-full hover:brightness-75" />
        <button className="h-5 w-5 bg-navGreen rounded-full hover:brightness-75" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -">
        home.ts - aminroslan
      </div>
    </div>
  );
};

export default Nav;
