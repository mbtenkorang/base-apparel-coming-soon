import buttonIcon from "/images/icon-arrow.svg";

const Email = () => {
  const handleClick = (event) => {
    event.preventDefault();
    const re = /.+\@.+\..+/;
    let ele = document.getElementById("emailAddress");
    let errormsg = document.getElementById("error");
    if (re.test(ele.value)) {
      if (errormsg.classList.contains("block")) {
        errormsg.classList.remove("block");
      }
      errormsg.classList.add("hidden");
    } else {
      errormsg.classList.remove("hidden");
    }
  };

  return (
    <>
      <form
        action=""
        method="get"
        className="mt-6 mx-3 flex items-center justify-center"
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
          autoComplete="off"
        />
        <button
          type="button"
          className="rounded-full py-4 px-8 bg-gradient-to-r from-bg-grad-lightpink to-bg-grad-darkpink -ml-14"
          onClick={(event) => handleClick(event)}
        >
          <img src={buttonIcon} aria-hidden="true" alt="" />
        </button>
      </form>
      <p id="error" className="text-xl text- text-center hidden">
        Invalid Email
      </p>
    </>
  );
};

export default Email;
