import axios from "axios";
import { axiosInstance } from "./axios";

export const sendOtp = async (phone, name) => {
  //   const ip = await axios.get("/api/ip");

  //   const auth = {
  //     user: "prodnd",
  //     password: "f9db0b7becXX",
  //     senderId: "CELTIX",
  //     tempId: "1707177089226198449",
  //     timeToAlive: 600,
  //     phone: phone,
  //     // sms: `Your OTP is {otp} Valid for 10 minutes. \nRequested from IP: ${ip?.data?.ip}. \nJust like your business goals, it's unique and time-sensitive!\n www.celitix.com`,
  //     sms: `Dear%20${name}%2C%20OTP%20to%20validate%20your%20mobile%20number%20on%20Celitix%20is%3A%20%7Botp%7D.%20Valid%20for%2010%20minutes.%0A%40celitix.com%20%23%7Botp%7D`
  //   };

  //   // const encodeMessage = encodeURI(auth.sms);

  //   const url = `https://www.proactivesms.in/generateOtp.jsp?userid=${auth.user}&key=${auth.password}&mobileno=${auth.phone}&senderid=${auth.senderId}&tempid=${auth.tempId}&sms=${auth.sms}&timetoalive=${auth.timeToAlive}`;

  //   const res = await axios.get(url);

  //   return res;
  // };

  // export const verifyOtp = async (data) => {
  //   const payload = {
  //     mobile: data?.mobile,
  //     otp: data?.otp,
  //   };
  //   const url = `https://www.proactivesms.in/validateOtpApi.jsp?mobileno=${payload.mobile}&otp=${payload.otp}`;

  //   const res = await axios.get(url);
  //   return res;

  try {
    const payload = {
      mobile: phone,
    };
    const res = await axiosInstance.post("/otp/sendOtp", payload);

    return {
      status: res.data.status === true,
      message: res.data.message,
      otpId: res.data.otpId ?? null,
    };
  } catch (e) {
    if (e.response) {
      return {
        status: false,
        message:
          e.response.data?.error ||
          e.response.data?.message ||
          "Too many requests. Please try again later.",
        otpId: null,
        statusCode: e.response.status,
      };
    }

    console.log(e);

    return {
      status: false,
      message: "Network error. Please check your connection.",
      otpId: null,
    };
  }
};

export const verifyOtp = async (data) => {
  const payload = {
    mobile: data?.mobile,
    otp: data?.otp,
    otpId: data?.otpId,
  };

  try {
    const res = await axiosInstance.post("/otp/verifyOtp", payload);

    return {
      status: res.data.status === true,
    };
  } catch (e) {
    if (e.response) {
      return {
        status: false,
        statusCode: e.response.status,
        message:
          e.response.data?.error ||
          e.response.data?.message ||
          "Something went wrong",
      };
    }

    return {
      status: false,
      message: "Network error. Please try again.",
    };
  }
};
