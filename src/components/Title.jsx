import Email from "./Email";

const Title = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:mt-10">
      <h2 className="text-4xl font-bold uppercase tracking-widest pt-10 flex flex-col text-center lg:items-start lg:ml-7 lg:tracking-[12px]">
        <span className="text-primary-desatred font-light">We're</span>
        <span>coming</span>
        <span>soon</span>
      </h2>
      <p className="text-[1rem] text-primary-desatred font-light pt-6 px-8 text-center lg:text-start">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <Email />
    </div>
  );
};

export default Title;
