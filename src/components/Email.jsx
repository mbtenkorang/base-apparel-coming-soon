const Email = () => {
  return (
    <form className="mt-6 flex justify-center border rounded-full">
      <label htmlFor="emailAddress"></label>
      <input
        className="w-3/5 py-3 px-6 text-xl bg-bg-grad-verylightpink "
        id="emailAddress"
        type="email"
        required
        placeholder="Email address"
        size={64}
        maxLength={64}
        pattern=".+\@.+\..+"
      />
      <input
        type="button"
        value={">"}
        className=" text-white text-2xl -ml-8 bg-gradient-to-r from-bg-grad-lightpink to-bg-grad-darkpink px-6 rounded-full"
      />
    </form>
  );
};

export default Email;
