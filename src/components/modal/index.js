import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FormattedMessage } from "react-intl";
import Loader from "../Loader";

function Modal({ onClose }) {
  const [loader, setLoader] = React.useState(false);

  const onSubmit = (data) => {
    data.preventDefault();
    const values = data.target;
    const botMessege = `
              nomonovfarhod.uz 🎯%0A
              Ismi: ${values.first_name.value}%0A
              Email: ${values.email.value}%0A
              Xabar: ${values.message.value}%0A
            `;
    setLoader(true);
    axios({
      method: "get",
      url: `https://api.telegram.org/bot6069404040:AAHSsCrtvwYM_3s1GAq6H_7tiLpWfG_Z8YY/sendMessage?chat_id=889498109&text=${botMessege}&parse_mode=HTML`,
    }).then(({ data }) => {
      if (data?.ok) {
        values.first_name.value = "";
        values.email.value = "";
        values.message.value = "";
        toast.success(<FormattedMessage id="app.contactme_scc" />);
        setLoader(false);
        console.log(botMessege);
        onClose()
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
          <form onSubmit={onSubmit}>
            <label>
              <FormattedMessage id="app.name" />
            </label>
            <input type="text" name="first_name" />
            <label>
              <FormattedMessage id="app.email" />
            </label>
            <input type="text" name="email" />
            <label>
              <FormattedMessage id="app.desc" />
            </label>
            <textarea name="message" cols="30" rows="5"></textarea>
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
