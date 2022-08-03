module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '107198199f49c048fde92ea0f20e92f6'),
  },
});
