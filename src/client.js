import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "qatxzwja",
  dataset: "production",
  apiVersion: "2024-04-20",
  useCdn: true,
  token:
    "skngOr8yGVyB7q2NIhx7aIBl46yV3ZGQbh0TStB3hlHJBMfKPpjFubtFAMxGu72cgvy1NBakAsok3OuXNwViOxlZvoIMpJiXRFZW28SgBlRMzBb4hnVP0FivmsrD9Ays2yw7oIhSOgL5iFhZgFLrCzfjM1JU1Q55xWpKVl6r6qzbwvGKZfta",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
