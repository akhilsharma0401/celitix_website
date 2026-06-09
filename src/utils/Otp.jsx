import axios from "axios";
import { axiosInstance } from "./axios";

export const sendOtp = async (phone, name) => {
  try {
    const payload = {
      mobile: phone,
      name: name,
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
