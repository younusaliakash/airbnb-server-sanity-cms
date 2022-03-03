export default {
  name: "review",
  title: "Review",
  type: "object",
  fields: [
    {
      name: "reviewDescription",
      title: "Description",
      type: "string",
    },
    {
      name: "traveller",
      title: "Traveller",
      type: "traveller",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      options: {
        list: [
          { title: "5 star", value: 5 },
          { title: "4 star", value: 4 },
          { title: "3 star", value: 3 },
          { title: "2 star", value: 2 },
          { title: "1 star", value: 1 },
        ],
        layout: "radio"
      },
    },
  ],
};
