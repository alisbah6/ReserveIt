import React from 'react'
import { useContext,useState } from "react";
import { RecoveryContext } from "../App";

const OTPinput = () => {
    const { email, otp } = useContext(RecoveryContext);
    const [timerCount, setTimer] = React.useState(60);
    const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
    const [disable, setDisable] = useState(true);
  return (
    <div>
        <p>Email Verification</p>
        <div>
            <p>
                We have sent a code to your email {email}
            </p>
        </div>
        <form>
        <div>
        <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
        </div>
        <div>
        <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
        </div>
        <div>
        <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
        </div>
        <div>
        <input
                      maxLength="1"
                      type="text"
                      name=""
                      id=""
                      onChange={(e) =>
                        setOTPinput([
                          e.target.value,
                          OTPinput[1],
                          OTPinput[2],
                          OTPinput[3],
                        ])
                      }
                    ></input>
        </div>
        <div>
            <a>Verify Account</a>
        </div>
        <div>
                    <p>Didn't recieve code?</p>{" "}
                    <a
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </a>
                  </div>
                  </form>
    </div>
  )
}

export default OTPinput