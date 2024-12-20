export default async function sitemap() {
  const baseURL = "https://www.tradegyan.co";

  return [
    {url: `${baseURL}/`, lastModified: new Date()},
    {url: `${baseURL}/complain`, lastModified: new Date()},
    {url: `${baseURL}/partner`, lastModified: new Date()},
    {url: `${baseURL}/about`, lastModified: new Date()},
    {url: `${baseURL}/contact`, lastModified: new Date()},
    {url: `${baseURL}/stocktable`, lastModified: new Date()},
    {url: `${baseURL}/service`, lastModified: new Date()},
    {url: `${baseURL}/disclaimer`, lastModified: new Date()},
    {url: `${baseURL}/faq`, lastModified: new Date()},
    {url: `${baseURL}/support`, lastModified: new Date()},
    {url: `${baseURL}/team`, lastModified: new Date()},
    {url: `${baseURL}/refund-policy`, lastModified: new Date()},
    {url: `${baseURL}/terms-conditions`, lastModified: new Date()},
    {url: `${baseURL}/investment-charter`, lastModified: new Date()},
    {url: `${baseURL}/complaint-escalation`, lastModified: new Date()},
    {url: `${baseURL}/career`, lastModified: new Date()},
    {url: `${baseURL}/strategic-insights`, lastModified: new Date()},
    {url: `${baseURL}/resource-hub`, lastModified: new Date()},
    {url: `${baseURL}/test`, lastModified: new Date()},
    {url: `${baseURL}/articles`, lastModified: new Date()},
    {url: `${baseURL}/learn`, lastModified: new Date()},
    {url: `${baseURL}/investor`, lastModified: new Date()},
    {url: `${baseURL}/investor/about-us`, lastModified: new Date()},
    {url: `${baseURL}/investor/services`, lastModified: new Date()},
    {url: `${baseURL}/investor/services/:id`, lastModified: new Date()},
    {url: `${baseURL}/investor/contact-us`, lastModified: new Date()},
    {url: `${baseURL}/trader`, lastModified: new Date()},
    {url: `${baseURL}/trader/about`, lastModified: new Date()},
    {url: `${baseURL}/trader/contact`, lastModified: new Date()},
    {url: `${baseURL}/trader/:name`, lastModified: new Date()},
    {url: `${baseURL}/trader/:type/:name`, lastModified: new Date()},
    {url: `${baseURL}/trader/service/:id`, lastModified: new Date()},
    {url: `${baseURL}/sebidiscloser`, lastModified: new Date()},
    {url: `${baseURL}/podcast`, lastModified: new Date()},
    {url: `${baseURL}/podcast/:id`, lastModified: new Date()},
    {url: `${baseURL}/message`, lastModified: new Date()},
    {url: `${baseURL}/trade-gyan-pricing-payment`, lastModified: new Date()},
    {url: `${baseURL}/profile`, lastModified: new Date()},
    {url: `${baseURL}/subscription`, lastModified: new Date()},
    {url: `${baseURL}/chats`, lastModified: new Date()},
    {url: `${baseURL}/client-login`, lastModified: new Date()},
    {url: `${baseURL}/register`, lastModified: new Date()},
  ];
}
