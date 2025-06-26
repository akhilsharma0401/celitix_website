//  /** @type {import('next-sitemap').IConfig} */
// module.exports = {
//   siteUrl: "https://www.celitix.com",
//   generateRobotsTxt: true,
//   sitemapSize: 5000,
//   changefreq: "weekly",
//   priority: 0.9,
//   exclude: [],
//   alternateRefs: [],
// };
/** @type {import('next-sitemap').IConfig} */
// const { smskey, rcskey, whatsappkey } = require("./src/app/lib/cities.js");
module.exports = {
  siteUrl: "https://www.celitix.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

  additionalPaths: async (config) => {
    // const data = [
    //   {
    //     country: "India", cities: ['jaipur', 'delhi', 'mumbai', 'bangalore',
    //       'lucknow', 'indore', 'surat', 'bhopal',
    //       'patna', 'nagpur', 'vadodara', 'ludhiana',
    //       'kanpur', 'kochi', 'coimbatore', 'bhubaneswar',
    //       'vishakhapatnam', 'thiruvananthapuram', 'rajkot',
    //       'guwahati', 'amritsar', 'agra', 'varanasi',
    //       'mumbai', 'delhi-ncr', 'bengaluru', 'chennai',
    //       'hyderabad', 'kolkata', 'ahmedabad', 'pune']
    //   },
    //   // { country: "USA", cities: ["New York", "Los Angeles"] },
    // ];

    const data = [
      "jaipur",
      "delhi",
      "mumbai",
      "bangalore",
      "lucknow",
      "indore",
      "surat",
      "bhopal",
      "patna",
      "nagpur",
      "vadodara",
      "ludhiana",
      "kanpur",
      "kochi",
      "coimbatore",
      "bhubaneswar",
      "vishakhapatnam",
      "thiruvananthapuram",
      "rajkot",
      "guwahati",
      "amritsar",
      "agra",
      "varanasi",
      "mumbai",
      "delhi-ncr",
      "bengaluru",
      "chennai",
      "hyderabad",
      "kolkata",
      "ahmedabad",
      "pune",
    ];

    const additionalPathsms = [
      "sms-service-provider",
      "bulk-sms",
      "sms-marketing",
      "send-bulk-messages",
      "send-bulk-sms",
      "bulk-message-sender",
      "bulk-sms-sender",
      "bulk-sms-service",
      "bulk-sms-service-provider",
      "sms-gateway",
      "sms-gateway",
      "twilio-api",
      "sms-api",
      "bulk-messaging",
      "bulk-sms-api",
      "sms-service-provider",
      "bulk-sms-provider",
      "sms-otp-service",
    ];
    const additionalPathwhatsapp = [
      "whatsapp-business-api",
      "bulk-whatsapp-messaging",
      "bulk-whatsapp-sender",
      "whatsapp-automation",
      "whatsapp-marketing-software",
      "bulk-whatsapp",
      "whatsapp-marketing-services",
      "bulk-message-sender-whatsapp",
      "whatsapp-bulk-sms",
      "whatsapp-web-api",
      "whatsapp-business-messaging",
      "whatsapp-business-platform",
    ];
    const additionalPathrcs = [
      "rcs-message",
      "rich-communication-services",
      "rich-communications",
      "rcs-business-messaging",
    ];

    const smspaths = data.flatMap((city) =>
      additionalPathsms.map((path) => ({
        loc: `/${path}/${city.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      }))
    );

    const smsrootPath = additionalPathsms.flatMap((path) => ({
      loc: `/${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }));

    const rcspaths = data.flatMap((city) =>
      additionalPathrcs.map((path) => ({
        loc: `/${path}/${city.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      }))
    );

    const rcsrootPath = additionalPathrcs.flatMap((path) => ({
      loc: `/${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }));

    const whatsapppaths = data.flatMap((city) =>
      additionalPathwhatsapp.map((path) => ({
        loc: `/${path}/${city.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: "daily",
        priority: 0.7,
      }))
    );

    const whatsapprootPath = additionalPathwhatsapp.flatMap((path) => ({
      loc: `/${path}`,
      lastmod: new Date().toISOString(),
      changefreq: "daily",
      priority: 0.7,
    }));

    return [
      ...smspaths,
      ...smsrootPath,
      ...rcspaths,
      ...rcsrootPath,
      ...whatsapppaths,
      ...whatsapprootPath,
    ];
  },
};
