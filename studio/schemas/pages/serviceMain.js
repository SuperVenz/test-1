export default {
  name: "serviceMain",
  title: "Service Page",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "Seo",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "seo",
      title: "Page Data",
      type: "seo",
      fieldset: "seo",
    },
    {
      name: "pageData",
      title: "Page Data",
      type: "layout",
    },
  ],
};
