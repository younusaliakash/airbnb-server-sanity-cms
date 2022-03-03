export default {
    name: "property",
    title: "Property",
    type: "document",
    fields: [
      {
        name: "propertyName",
        title: "Property Name",
        type: "string",
      },
      {
        name: "location",
        title: "Location",
        type: "geopoint",
      },
      {
        name: "propertyType",
        title: "Property Type",
        type: "string",
        options: {
          list: [
            { title: "House", value: "house" },
            { title: "Flat", value: "flat" },
          ],
          layout: "radio",
        },
      },
      {
        name: "mainImage",
        title: "Main Image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "images",
        title: "Images",
        type: "array",
        of: [{type: "propertyImages"}]
      },
      {
        name: "cityName",
        title: "City Name",
        type: "cityType",
      },
      {
        name: "price",
        title: "Price Per Night",
        type: "number",
      },
      {
        name: "beds",
        title: "Total Bed",
        type: "number",
      },
      {
        name: "bedrooms",
        title: "Total Bedrooms",
        type: "number",
      },
      {
        name: "bathrooms",
        title: "Total Bathroom",
        type: "number",
      },
      {
        name: "guest",
        title: "Total Guest",
        type: "number",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            source: "propertyName",
            maxLength: 100
        }
      },
      {
        name: "description",
        title: "Description",
        type: "string", 
      },
      {
        name: "host",
        title: "Host",
        type: "host", 
      },
      {
        name: "review",
        title: "Review",
        type: "array",
        of: [{type: "review"}] 
      },
    ],
  };