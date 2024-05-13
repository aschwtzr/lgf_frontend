module.exports = {
  devServer: {
    proxy: import.meta.env.VITE_API_URL,
  }
  }