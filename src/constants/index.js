const cards = [
  {
    id: crypto.randomUUID(),
    type: "normal",
    title: "Basic",
    price: {
      monthly: 19.99,
      annually: 199.99,
    },
    offers: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    id: crypto.randomUUID(),
    type: "special",
    title: "Professional",
    price: {
      monthly: 24.99,
      annually: 249.99,
    },
    offers: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    id: crypto.randomUUID(),
    type: "normal",
    title: "Master",
    price: {
      monthly: 39.99,
      annually: 399.99,
    },
    offers: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

export { cards };
