module.exports = {
  devServer: {
    compress: true,
    port: 3000,

    // 👇️ set this property
    allowedHosts: [
      'all'
    ],
  },
};
