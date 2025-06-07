import axios from "axios"

export const sendOtp = async (phone) => {

    const auth = {
        user: "prodnd",
        password: "f9db0b7becXX",
        senderId: "CELTIX",
        tempId: "1707173264051393276",
        timeToAlive: 600,
        phone: phone,
        sms: `Your OTP is {otp} Valid for 10 minutes. \nRequested from IP: ${"192.168.0.1"}. \nJust like your business goals, it's unique and time-sensitive!\n www.celitix.com`,
    };

    const encodeMessage = encodeURI(auth.sms)


    const url = `https://www.proactivesms.in/generateOtp.jsp?userid=${auth.user}&key=${auth.password}&mobileno=${auth.phone}&senderid=${auth.senderId}&tempid=${auth.tempId}&sms=${encodeMessage}&timetoalive=${auth.timeToAlive}`;

    const res = await axios.get(url)

    return res
};

export const verifyOtp = async (data) => {

    const payload = {
        mobile: data?.mobile,
        otp: data?.otp
    }
    const url = `https://www.proactivesms.in/validateOtpApi.jsp?mobileno=${payload.mobile}&otp=${payload.otp}`

    const res = await axios.get(url)
    return res
}

