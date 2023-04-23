import React from "react";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";
import Loader from "../loader";
import Services from "../../../services/api";
import CONSTANTS from "../../../config/constants";

function Modal({ onClose }) {
  const [loader, setLoader] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const errorsStyle = {
    true: {
      border: "1px solid red",
    },
    false: {},
  };

  const { TELEGRAM_API, BOT_TOKEN, CHAT_ID, BOT_CHAT_TYPE } = CONSTANTS;

  const onSubmit = (data) => {
    const [w, f, e, m] = [
      `nomonovfarhod.uz 🎯%0A`,
      `Name: ${data.first_name}%0A`,
      `Email: ${data.email}%0A`,
      `Message: ${data.message}%0A`,
    ];
    const botMessege = w + f + e + m;
    setLoader(true);
    Services.getRequest(
      `${TELEGRAM_API}/${BOT_TOKEN}/sendMessage?${CHAT_ID}&text=${botMessege}&${BOT_CHAT_TYPE}`
    ).then(({ data }) => {
      if (data?.ok) {
        toast.success(<FormattedMessage id="app.contactme_scc" />);
        setLoader(false);
        onClose();
        reset();
      }
      if (!data?.ok) {
        toast.error(<FormattedMessage id="app.contactme_err" />);
        setLoader(false);
      }
    });
  };

  return (
    <>
      {loader && <Loader />}
      <div className="modal">
        <div className="modal_container">
          <div className="close_btn" onClick={onClose}>
            &#x2715;
          </div>
          <div className="modal_title">
            <h2>
              <FormattedMessage id="app.contactme" />
            </h2>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <FormattedMessage id="app.name" />
            </label>
            <input
              type="text"
              {...register("first_name", { required: true })}
              style={errorsStyle[!!errors.first_name]}
            />
            <label>
              <FormattedMessage id="app.email" />
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              style={errorsStyle[!!errors.email]}
            />
            <label>
              <FormattedMessage id="app.desc" />
            </label>

            <FormattedMessage id="app.tlg.msg" defaultMessage="search">
              {(placeholder) => (
                <textarea
                  {...register("message")}
                  cols="30"
                  rows="5"
                  value={placeholder}
                />
              )}
            </FormattedMessage>

            <button>
              <FormattedMessage id="app.send" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
