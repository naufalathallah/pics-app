import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 4nDXQvZyik6_cYKgP5LNDHmJHXuZrEG0t_-suKzvy4s",
  },
});
