import React, { useEffect, useState } from "react";
import {
  ReachApp,
  Reachclicktocall,
  Reachemail,
  Reachinboundcalling,
  ReachMissedcall,
  ReachObd,
  ReachRCS,
  ReachSMS,
  Reachwaytosms,
  Reachwhatsappicon,
} from "../../../../public/assets/images";
import UniversalButton from "@/app/components/UniversalButton";
import FormPopup from "@/app/components/FormPopup";
import Image from "next/image";
import { axiosInstance } from "@/utils/axios";
const PricingList = () => {
  const [market, setMarket] = useState("India");
  const markets = [
    "Argentina",
    "Brazil",
    "Chile",
    "Colombia",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Israel",
    "Italy",
    "Malaysia",
    "Mexico",
    "Netherlands",
    "Nigeria",
    "North America",
    "Pakistan",
    "Peru",
    "Russia",
    "Saudi Arabia",
    "South Africa",
    "Spain",
    "Turkey",
    "United Arab Emirates",
    "United Kingdom",
    "Other",
    "Rest of Africa",
    "Rest of Asia Pacific",
    "Rest of Central & Eastern Europe",
    "Rest of Latin America",
    "Rest of Middle East",
    "Rest of Western Europe",
  ];

  const CHANNEL_ICONS = {
    WhatsApp: Reachwhatsappicon,
    RCS: ReachRCS,
    SMS: ReachSMS,
    Authenticator: ReachApp,
    EmailOTP: Reachemail,
    Outbound: ReachObd,
    Inbound: Reachinboundcalling,
    Missed: ReachMissedcall,
    Twoway: Reachwaytosms,
    clicktocall: Reachclicktocall,
  };
  // WhatsApp-only rate slabs by currency & template type

  const [currency, setCurrency] = useState("inr");
  const [whatsappTypeList, setWhatsAppTypeList] = useState([
    {
      label: "Marketing",
      value: "Marketing",
    },
    {
      label: "Utility",
      value: "Utility",
    },
    {
      label: "Authentication",
      value: "Authentication",
    },
  ]);
  const options = ["inr", "usd"];

  const [openDialog, setOpenDialog] = useState(false);
  const handleShowFormPopup = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  // ────────────────────────────────────────────────────────────────────────────
  // State & initial setup
  const [value, setValue] = useState(0);
  const [channel, setChannel] = useState("WhatsApp");
  const [whatsAppType, setWhatsAppType] = useState("Marketing");
  const [rates, setRates] = useState({ usd: 1 / 75, eur: 1 / 90 });
  const ticks = [200000, 400000, 600000, 800000];

  const whatsappCurrencies = [
    { code: "ars", label: "Argentine Peso (ARS)" },
    { code: "aud", label: "Australian Dollar (AUD)" },
    { code: "clp", label: "Chilean Peso (CLP)" },
    { code: "cop", label: "Colombian Peso (COP)" },
    { code: "usd", label: "Dollar (USD)" },
    { code: "eur", label: "Euro (EUR)" },
    { code: "inr", label: "Indian Rupee (INR)" },
    { code: "idr", label: "Indonesian Rupiah (IDR)" },
    { code: "myr", label: "Malaysian Ringgit (MYR)" },
    { code: "mxn", label: "Mexican Peso (MXN)" },
    { code: "pen", label: "Peruvian Sol (PEN)" },
    { code: "gbp", label: "Pound Sterling (GBP)" },
    { code: "sar", label: "Saudi Arabian Riyal (SAR)" },
    { code: "sgd", label: "Singapore Dollar (SGD)" },
    { code: "aed", label: "UAE Dirham (AED)" },
  ];

  const simpleCurrencies =
    channel === "SMS"
      ? market === "India"
        ? ["inr"]
        : ["usd"]
      : ["inr", "usd"];

  const WHATSAPP_RATES = {
    inr: {
      WhatsApp_Marketing: [[Infinity, 0.9]],
      WhatsApp_Utility: [[Infinity, 0.12]],
      WhatsApp_Authentication: [[Infinity, 0.12]],
      WhatsApp_International: [[Infinity, 2.62]],
    },
    usd: {
      WhatsApp_Marketing: [[Infinity, 0.0118]],
      WhatsApp_Utility: [[Infinity, 0.0014]],
      WhatsApp_Authentication: [[Infinity, 0.0014]],
      WhatsApp_International: [[Infinity, 0.0304]],
    },
    eur: {
      WhatsApp_Marketing: [[Infinity, 0.0099]],
      WhatsApp_Utility: [[Infinity, 0.0012]],
      WhatsApp_Authentication: [[Infinity, 0.0012]],
    },
    aed: {
      WhatsApp_Marketing: [[Infinity, 0.1832]],
      WhatsApp_Utility: [[Infinity, 0.0576]],
      WhatsApp_Authentication: [[Infinity, 0.0576]],
    },
    thb: {
      WhatsApp_Marketing: [[Infinity, 2.26]],
      WhatsApp_Utility: [[Infinity, 0.32]],
      WhatsApp_Authentication: [[Infinity, 0.32]],
    },
  };

  // Fetch live exchange rates
  useEffect(() => {
    fetch(
      "https://v6.exchangerate-api.com/v6/26e0264a2658e739860a6998/latest/USD",
    )
      .then((res) => res.json())
      .then((data) =>
        setRates({
          usd: 1,
          eur: data.conversion_rates.EUR,
          inr: data.conversion_rates.INR,
        }),
      )
      .catch((err) => console.error("Failed to fetch rates", err));
  }, []);

  // Input handler
  const handleChange = (e) => {
    const raw = e.target.value;
    if (raw === "" || /^\d+$/.test(raw)) {
      setValue(raw === "" ? "" : String(Math.min(1_000_000, Number(raw))));
    }
  };
  const percent = (value / 1_000_000) * 100;

  function getChannelKey(channel, whatsAppType) {
    if (channel === "WhatsApp") return `WhatsApp_${whatsAppType}`;
    return channel.replace(/\s+/g, "_");
  }

  // Calculate total cost
  function calculateTotal(val, currency, channelKey) {
    if (channelKey.startsWith("WhatsApp_")) {
      const slabs = WHATSAPP_RATES[currency]?.[channelKey] || [];
      const rate =
        slabs.find(([limit]) => val <= limit)?.[1] ??
        0(([limit]) => val <= limit)?.[1] ??
        0;
      return val * rate;
    }

    // 2) Other channels: tiered INR + convert
    const ALL_RATES = {
      RCS: [
        [100000, 0.2],
        [500000, 0.18],
        [Infinity, 0.16],
      ],
      SMS: [
        [50000, 0.15],
        [100000, 0.12],
        [500000, 0.1],
        [Infinity, 0.09],
      ],
      EmailOTP: [[Infinity, 0.05]],
      Outbound: [
        [100000, 0.2],
        [500000, 0.18],
        [Infinity, 0.16],
      ],
      clicktocall: [
        [100000, 0.2],
        [500000, 0.18],
        [Infinity, 0.16],
      ],
      Inbound: [
        [3, 0.5],
        [6, 0.49],
        [9, 0.48],
        [Infinity, 0.46],
      ],
      Missed: [
        [3, 1],
        [6, 0.49],
        [9, 0.48],
        [Infinity, 0.46],
      ],
      Twoway: [
        [3, 2],
        [6, 1.49],
        [9, 2.48],
        [Infinity, 5.46],
      ],
      Authenticator: [
        [3, 5],
        [6, 0.49],
        [9, 0.48],
        [Infinity, 0.46],
      ],
      default: [
        [200000, 0.1],
        [400000, 0.09],
        [600000, 0.08],
        [800000, 0.07],
        [Infinity, 0.06],
      ],
    };

    const slabs = ALL_RATES[channelKey] || ALL_RATES.default;
    const rate = slabs.find(([limit]) => val <= limit)?.[1] ?? 0;
    const inrTotal = val * rate;

    if (currency === "usd") return inrTotal / rates.inr;
    if (currency === "eur") return (inrTotal / rates.inr) * rates.eur;
    return inrTotal;
    // return 0;
  }

  // Currency formatter
  const formatCurrency = (amount, currency, market = "") => {
    // const symbols = { inr: "₹", usd: "$", eur: "€", aed: "AED", thb: "฿" };
    const symbols = {
      ars: "ARS ",
      aud: "A$",
      clp: "CLP ",
      cop: "COP ",
      usd: "$",
      eur: "€",
      inr: "₹",
      idr: "Rp ",
      myr: "RM ",
      mxn: "MX$",
      pen: "S/ ",
      gbp: "£",
      sar: "SAR ",
      sgd: "S$",
      aed: "AED ",
    };

    let data = [];
    let total = 0;
    if (market == "whatsapp") {
      data = apiData?.[0];
      const wpType = whatsAppType?.toLowerCase();
      const totalPrice = parseFloat(data?.[wpType]) * value;
      total = totalPrice + totalPrice * 0.05;
    } else {
      total = amount;
    }

    return `${symbols[currency] || ""}${parseFloat(total)?.toFixed(4)}`;
  };

  const channelKey = getChannelKey(channel, whatsAppType);

  const total =
    channel !== "WhatsApp" && calculateTotal(value, currency, channelKey);

  const [apiData, setApiData] = useState([]);

  const baseWhatsAppTypes = [
    { label: "Marketing", value: "Marketing" },
    { label: "Utility", value: "Utility" },
    { label: "Authentication", value: "Authentication" },
  ];
  const fetchPricing = async (type, market, currency) => {
    try {
      type = type?.toLowerCase();
      const searchQuery =
        type === "whatsapp"
          ? `?type=${type}&country=${market}&currency=${currency}`
          : `?type=${type}&country=${market}`;
      const pricingRes = await axiosInstance.get(`/pricing${searchQuery}`);

      const data =
        pricingRes?.data?.data?.length > 0 ? pricingRes?.data?.data : [];

      if (type == "whatsapp") {
        const hasIntl =
          data?.[0]?.authentication_intl != null &&
          data?.[0]?.authentication_intl !== "";

        setWhatsAppTypeList(
          hasIntl
            ? [
                ...baseWhatsAppTypes,
                { label: "International", value: "authentication_intl" },
              ]
            : baseWhatsAppTypes,
        );
        // setWhatsAppTypeList((prevList) => {
        //   const alreadyHas = prevList.some(
        //     (t) => t.value === "authentication_intl",
        //   );
        //   if (alreadyHas) return prevList;
        //   return [
        //     ...prevList,
        //     { label: "International", value: "authentication_intl" },
        //   ];
        // });
      }

      setApiData(data);
    } catch (error) {
      console.error("API error:", error);
      setApiData([]);
    }
  };

  useEffect(() => {
    if (channel === "WhatsApp" || channel === "SMS") {
      // if (channel === "WhatsApp") {
      //   setWhatsAppTypeList([
      //     { label: "Marketing", value: "Marketing" },
      //     { label: "Utility", value: "Utility" },
      //     { label: "Authentication", value: "Authentication" },
      //   ]);
      // }
      fetchPricing(channel, market, currency);
    }
  }, [channel, market, currency]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  // 🔹 Pagination Logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = apiData?.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(apiData?.length / rowsPerPage);

  // 🔹 Reset page on market change
  useEffect(() => {
    setCurrentPage(1);
  }, [market]);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Choose Your Communication Channel
        </h2>
        <div className="flex flex-row items-center justify-center gap-4 mb-6">
          <select
            className="bg-white border border-blue-300 text-blue-800 font-medium rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={channel}
            onChange={(e) => {
              const selectedChannel = e.target.value;
              setChannel(selectedChannel);
              setValue(0);

              if (selectedChannel === "SMS") {
                if (market === "India") {
                  setCurrency("inr");
                } else {
                  setCurrency("usd");
                }
              } else {
                setCurrency("inr"); // default for others
              }
            }}
          >
            <option value="WhatsApp">WhatsApp</option>
            <option value="RCS">RCS</option>
            <option value="SMS">SMS</option>
            <option value="Outbound">Outbound Dialer</option>
          </select>

          <select
            value={market}
            onChange={(e) => {
              const selectedMarket = e.target.value;
              setMarket(selectedMarket);
              // setWhatsAppTypeList([
              //   {
              //     label: "Marketing",
              //     value: "Marketing",
              //   },
              //   {
              //     label: "Utility",
              //     value: "Utility",
              //   },
              //   {
              //     label: "Authentication",
              //     value: "Authentication",
              //   },
              // ]);
              if (channel === "SMS") {
                if (selectedMarket === "India") {
                  setCurrency("inr");
                } else {
                  setCurrency("usd");
                }
              }
            }}
            className="bg-white border w-56 border-blue-300 text-blue-800 font-medium rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            {markets.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            value={currency}
            onChange={(e) => {
              setCurrency(e.target.value);
              // setWhatsAppTypeList([
              //   {
              //     label: "Marketing",
              //     value: "Marketing",
              //   },
              //   {
              //     label: "Utility",
              //     value: "Utility",
              //   },
              //   {
              //     label: "Authentication",
              //     value: "Authentication",
              //   },
              // ]);
            }}
            className="bg-white border border-blue-300 text-blue-800 font-medium rounded-lg px-4 py-2 shadow-sm"
          >
            {channel === "WhatsApp"
              ? whatsappCurrencies.map((cur) => (
                  <option key={cur.code} value={cur.code}>
                    {cur.label}
                  </option>
                ))
              : simpleCurrencies.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur.toUpperCase()}
                  </option>
                ))}
          </select>
        </div>
        {channel && (
          <div className="mt-6 bg-white rounded-xl p-5 border border-blue-200 shadow-inner max-w-2xl mx-auto text-left">
            {channel === "WhatsApp" && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={CHANNEL_ICONS[channel]}
                    alt={channel}
                    className="w-10 h-10"
                  />
                  <h5 className="text-lg font-semibold text-blue-700">
                    {channel} Pricing
                  </h5>
                </div>
                <div className="mt-4 flex justify-center items-center gap-4">
                  {whatsappTypeList?.map((type, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setWhatsAppType(type.value);
                        // setValue(0);
                      }}
                      className={`
              px-4 py-2 rounded-full font-medium text-sm transition
              ${
                whatsAppType === type.value
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            `}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>

                {/* ← Your existing slider/currency block */}
                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="w-full md:w-2/3">
                    <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                      Message Volume
                      <span className="text-xs text-gray-500">
                        {value} messages
                      </span>
                    </label>
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`,
                        }}
                      />
                      <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                        {ticks.map((tick) => (
                          <button
                            key={tick}
                            onClick={() => setValue(tick)}
                            style={{
                              left: `${(tick / 1000000) * 100}%`,
                              transform: "translateX(-50%)",
                            }}
                            className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    value={value}
                    onChange={handleChange}
                    className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="mt-6 flex items-center justify-end gap-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <div className="text-lg font-bold text-blue-800">
                      Total: {formatCurrency(0, currency, "whatsapp")}
                    </div>
                    {currency == "inr" && (
                      <span className="text-xs text-gray-500">(+18 % GST)</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end mt-2 md:mt-5">
                  <UniversalButton
                    label="Get a Quote"
                    variant="brutal"
                    className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                    onClick={handleShowFormPopup}
                  />

                  <FormPopup visible={openDialog} onHide={handleCloseDialog} />
                </div>

                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    height: 10px;
                    width: 10px;
                    //   background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                  input[type="range"]::-moz-range-thumb {
                    height: 16px;
                    width: 16px;
                    background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                `}</style>
              </>
            )}

            {channel === "RCS" && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={CHANNEL_ICONS[channel]}
                    alt={channel}
                    className="w-10 h-10"
                  />
                  <h5 className="text-lg font-semibold text-blue-700">
                    {channel} Pricing
                  </h5>
                </div>
                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="w-full md:w-2/3">
                    <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                      Message Volume
                      <span className="text-xs text-gray-500">
                        {value} messages
                      </span>
                    </label>
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        // step="200000"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`,
                        }}
                      />
                      <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                        {ticks.map((tick) => (
                          <button
                            key={tick}
                            onClick={() => setValue(tick)}
                            style={{
                              left: `${(tick / 1000000) * 100}%`,
                              transform: "translateX(-50%)",
                            }}
                            className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    value={value}
                    onChange={handleChange}
                    className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="mt-3 flex items-center justify-end gap-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <div className="text-lg font-bold text-blue-800">
                      Total: {formatCurrency(total, currency)}
                    </div>
                    <span className="text-xs text-gray-500">(+18 % GST)</span>
                  </div>
                </div>

                <div className="flex justify-end mt-2 md:mt-5">
                  <UniversalButton
                    label="Get a Quote"
                    variant="brutal"
                    className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                    onClick={handleShowFormPopup}
                  />

                  <FormPopup visible={openDialog} onHide={handleCloseDialog} />
                </div>

                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    height: 10px;
                    width: 10px;
                    //   background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                  input[type="range"]::-moz-range-thumb {
                    height: 16px;
                    width: 16px;
                    background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                `}</style>
              </div>
            )}

            {channel === "SMS" && (
              <>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Image
                      src={CHANNEL_ICONS[channel]}
                      alt={channel}
                      className="w-10 h-10"
                    />
                    <h5 className="text-lg font-semibold text-blue-700">
                      {channel} Pricing
                    </h5>
                  </div>
                  <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                    <div className="w-full md:w-2/3">
                      <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                        Message Volume
                        <span className="text-xs text-gray-500">
                          {value} messages
                        </span>
                      </label>
                      <div className="relative w-full">
                        <input
                          type="range"
                          min="0"
                          max="1000000"
                          // step="200000"
                          value={value}
                          onChange={(e) => setValue(Number(e.target.value))}
                          className="w-full h-2 rounded-full appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`,
                          }}
                        />
                        <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                          {ticks.map((tick) => (
                            <button
                              key={tick}
                              onClick={() => setValue(tick)}
                              style={{
                                left: `${(tick / 1000000) * 100}%`,
                                transform: "translateX(-50%)",
                              }}
                              className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <input
                      type="number"
                      min="0"
                      max="1000000"
                      value={value}
                      onChange={handleChange}
                      className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-end gap-4">
                    <div className="flex items-baseline justify-center gap-2">
                      <div className="text-lg font-bold text-blue-800">
                        Total: {formatCurrency(total, currency)}
                      </div>
                      <span className="text-xs text-gray-500">(+18 % GST)</span>
                    </div>
                  </div>

                  <div className="flex justify-end mt-2 md:mt-5">
                    <UniversalButton
                      label="Get a Quote"
                      variant="brutal"
                      className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                      onClick={handleShowFormPopup}
                    />

                    <FormPopup
                      visible={openDialog}
                      onHide={handleCloseDialog}
                    />
                  </div>

                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      appearance: none;
                      height: 10px;
                      width: 10px;
                      //   background: #1e40af;
                      border-radius: 50%;
                      cursor: pointer;
                    }
                    input[type="range"]::-moz-range-thumb {
                      height: 16px;
                      width: 16px;
                      background: #1e40af;
                      border-radius: 50%;
                      cursor: pointer;
                    }
                  `}</style>
                </div>
              </>
            )}

            {channel === "Outbound" && (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Image
                    src={CHANNEL_ICONS[channel]}
                    alt={channel}
                    className="w-10 h-10"
                  />
                  <h5 className="text-lg font-semibold text-blue-700">
                    Outbound Dialer Pricing
                  </h5>
                </div>
                <div className="mt-10 flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="w-full md:w-2/3">
                    <label className="text-sm font-semibold text-gray-600 mb-1 flex justify-between">
                      credit Volume
                      <span className="text-xs text-gray-500">
                        {value} voice credit
                      </span>
                    </label>
                    <div className="relative w-full">
                      <input
                        type="range"
                        min="0"
                        max="1000000"
                        // step="200000"
                        value={value}
                        onChange={(e) => setValue(Number(e.target.value))}
                        className="w-full h-2 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, #2563eb ${percent}%, #d1d5db ${percent}%)`,
                        }}
                      />
                      <div className="absolute top-2 left-0 w-full h-6 pointer-events-none">
                        {ticks.map((tick) => (
                          <button
                            key={tick}
                            onClick={() => setValue(tick)}
                            style={{
                              left: `${(tick / 1000000) * 100}%`,
                              transform: "translateX(-50%)",
                            }}
                            className="absolute top-2.5 w-1 h-3 bg-blue-500 rounded-full pointer-events-auto shadow-md"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    value={value}
                    onChange={handleChange}
                    className="text-center text-blue-800 bg-white border border-blue-300 font-semibold px-4 py-2 rounded-lg w-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="mt-3 flex items-center justify-end gap-4">
                  <div className="flex items-baseline justify-center gap-2">
                    <div className="text-lg font-bold text-blue-800">
                      Total: {formatCurrency(total, currency)}
                    </div>
                    <span className="text-xs text-gray-500">(+18 % GST)</span>
                  </div>
                </div>

                <div className="flex justify-end mt-2 md:mt-5">
                  <UniversalButton
                    label="Get a Quote"
                    variant="brutal"
                    className="bg-[#9B44B6] border-[#9B44B6] text-white px-5 py-1 font-semibold hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_#9B44B6]"
                    onClick={handleShowFormPopup}
                  />

                  <FormPopup visible={openDialog} onHide={handleCloseDialog} />
                </div>

                <style jsx>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    height: 10px;
                    width: 10px;
                    //   background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                  input[type="range"]::-moz-range-thumb {
                    height: 16px;
                    width: 16px;
                    background: #1e40af;
                    border-radius: 50%;
                    cursor: pointer;
                  }
                `}</style>
              </div>
            )}
          </div>
        )}

        {/* 📊 Pricing Table (Global) */}
        {channel === "SMS" &&
          market !== "India" &&
          (apiData?.length > 0 ? (
            <div className="mt-8 max-w-6xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              {/* HEADER (LIGHT DARK) */}
              <div className="px-5 py-4 bg-slate-600 text-white border-b border-slate-700">
                <h2 className="text-lg font-semibold tracking-wide">
                  Pricing for <span className="text-sky-300">{market}</span>
                </h2>
                <p className="text-xs text-slate-300 mt-1">
                  {apiData?.length} operators available
                </p>
              </div>

              {/* TABLE */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[980px] text-sm text-left table-fixed border-collapse">
                  {/* FIX COLUMN WIDTH */}
                  <colgroup>
                    <col className="w-[140px]" />
                    <col className="w-[330px]" />
                    <col className="w-[110px]" />
                    <col className="w-[100px]" />
                    <col className="w-[170px]" />
                    <col className="w-[130px]" />
                  </colgroup>

                  {/* TABLE HEADER */}
                  <thead className="bg-slate-50 text-slate-700 uppercase text-xs border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3">Country</th>
                      <th className="px-4 py-3">Operator</th>
                      <th className="px-4 py-3">CC Code</th>
                      <th className="px-4 py-3">MCC</th>
                      <th className="px-4 py-3">MNC</th>
                      <th className="px-4 py-3 text-right">Price (USD)</th>
                    </tr>
                  </thead>

                  {/* TABLE BODY */}
                  <tbody>
                    {currentRows.map((row) => (
                      <tr
                        key={row.id}
                        className="border-b border-slate-100 hover:bg-sky-50 transition h-[50px]"
                      >
                        <td className="px-4 py-3 font-medium text-slate-800 truncate">
                          {row.country}
                        </td>

                        <td className="px-4 py-3 text-slate-700 truncate">
                          {row.operator}
                        </td>

                        <td className="px-4 py-3 text-slate-600">
                          +{row.ccCode}
                        </td>

                        <td className="px-4 py-3 text-slate-600">{row.mcc}</td>

                        <td className="px-4 py-3 text-slate-600 truncate">
                          {row.mnc}
                        </td>

                        <td className="px-4 py-3 text-right font-semibold text-sky-700">
                          {currency === "inr"
                            ? `₹ ${(row.priceUSD * rates.inr).toFixed(2)}`
                            : `$ ${row.priceUSD}`}
                        </td>
                      </tr>
                    ))}

                    {/* FIX HEIGHT ALWAYS 10 ROWS */}
                    {Array.from({
                      length: rowsPerPage - currentRows.length,
                    }).map((_, i) => (
                      <tr
                        key={`empty-${i}`}
                        className="h-[50px] border-b border-slate-100"
                      >
                        <td colSpan="6"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* PAGINATION */}
              <div className="flex justify-center items-center gap-2 p-4 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-sky-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1.5 border rounded-lg ${
                      currentPage === i + 1
                        ? "bg-sky-100 border-sky-300 text-sky-800 font-semibold"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-sky-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  className="px-3 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-sky-50"
                >
                  Next
                </button>
              </div>

              {/* RESULT COUNT */}
              <p className="text-sm text-slate-500 text-center pb-4 bg-slate-50">
                Showing {indexOfFirstRow + 1}–
                {Math.min(indexOfLastRow, apiData.length)} of {apiData.length}{" "}
                results
              </p>
            </div>
          ) : (
            <div className="mt-6 text-center text-slate-500">
              No pricing data available for {market}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PricingList;
