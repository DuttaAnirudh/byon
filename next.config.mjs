/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kchdrzclgggkdevjrper.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/eventPosters/**",
      },
    ],
  },
};

export default nextConfig;
