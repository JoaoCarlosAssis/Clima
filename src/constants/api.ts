export const api = {
  url: {
    current: "/api/weather?type=current&q={{query}}",
    forecast: "/api/weather?type=forecast&days=3&q={{query}}",
    search: "/api/weather?type=search&q={{query}}",
  },
};
