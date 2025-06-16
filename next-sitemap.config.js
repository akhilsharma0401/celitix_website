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
module.exports = {
  siteUrl: 'https://www.celitix.com',
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

    const data = ['jaipur', 'delhi', 'mumbai', 'bangalore',
      'lucknow', 'indore', 'surat', 'bhopal',
      'patna', 'nagpur', 'vadodara', 'ludhiana',
      'kanpur', 'kochi', 'coimbatore', 'bhubaneswar',
      'vishakhapatnam', 'thiruvananthapuram', 'rajkot',
      'guwahati', 'amritsar', 'agra', 'varanasi',
      'mumbai', 'delhi-ncr', 'bengaluru', 'chennai',
      'hyderabad', 'kolkata', 'ahmedabad', 'pune']

    const additionalPathss = [
      'sms-service-provider', 'bulk-sms', 'sms-marketing'
    ]



    const paths = data.flatMap((city) =>
      additionalPathss.map((path) => ({
        loc: `/${path}/${city.toLowerCase()}`,
        lastmod: new Date().toISOString(),
        changefreq: 'daily',
        priority: 0.7,
      }))
    )

    const rootPath = additionalPathss.flatMap((path) => ({
      loc: `/${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.7,
    }))



    return [...paths, ...rootPath];
  },
};