import Email from "./Email";

const Title = () => {
  return (
    <div className="flex flex-col item-center">
      <h2 className="text-6xl uppercase tracking-widest pt-10 flex flex-col text-center">
        <span className="text-primary-desatred font-light">We're</span>
        <span>coming</span>
        <span>soon</span>
      </h2>
      <p className="text-lg text-primary-desatred font-light pt-6 px-8 text-center">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <Email />
    </div>
  );
};

export default Title;
