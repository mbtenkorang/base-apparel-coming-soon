import buttonIcon from "/images/icon-arrow.svg";

const Email = () => {
  return (
    <form
      autoComplete="off"
      action=""
      method="post"
      className="mt-6 flex items-center justify-center"
    >
      <label htmlFor="emailAddress"></label>
      <input
        className="w-4/5 py-3 px-6 text-xl bg-bg-grad-verylightpink border border-bg-grad-darkpink rounded-full"
        id="emailAddress"
        type="email"
        required
        placeholder="Email address"
        size={64}
        maxLength={64}
        pattern=".+\@.+\..+"
      />
      <button
        type="button"
        className="rounded-full py-4 px-8 bg-gradient-to-r from-bg-grad-lightpink to-bg-grad-darkpink -ml-14"
        onClick={() => alert("Clicked!")}
      >
        <img src={buttonIcon} aria-hidden="true" alt="" />
      </button>
    </form>
  );
};

export default Email;
