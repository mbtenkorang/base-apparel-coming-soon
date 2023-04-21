import { useState } from "react";
import buttonIcon from "/images/icon-arrow.svg";

const Email = () => {
  const [errorMessage, setErrorMessage] = useState("error");

  const handleClick = (event) => {
    event.preventDefault();
    const re = /.+\@.+\..+/;
    let ele = document.getElementById("emailAddress");
    let errormsg = document.getElementById("error");

    if (ele.value === "") {
      errormsg.classList.remove("hidden");
      return setErrorMessage(
        (errorMessage) => (errorMessage = "Field is blank")
      );
    }
    if (re.test(ele.value)) {
      if (errormsg.classList.contains("block")) {
        errormsg.classList.remove("block");
      }
      errormsg.classList.add("hidden");
    } else {
      errormsg.classList.remove("hidden");
      setErrorMessage(
        (errorMessage) => (errorMessage = "Invalid email address")
      );
    }
  };

  return (
    <div className="mt-6 mb-10 mx-3">
      <form action="" method="get" className="flex items-center justify-center">
        <label htmlFor="emailAddress"></label>
        <input
          className="w-4/5 py-3 px-6 text-xl bg-bg-grad-verylightpink border border-bg-grad-darkpink rounded-full"
          id="emailAddress"
          type="email"
          required
          placeholder="Email address"
          size={64}
          maxLength={64}
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
      <p id="error" className="text-xl text-red-400 text-center hidden mt-2">
        {errorMessage}
      </p>
    </div>
  );
};

export default Email;
