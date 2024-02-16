import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      env: {
        mongodb_username: "dungbui1110",
        mongodb_password: "dragonnica2001",
        mongodb_clustername: "cluster0",
      },
    };

  return {
    env: {
      mongodb_username: "dungbui1110",
      mongodb_password: "dragonnica2001",
      mongodb_clustername: "cluster0",
    },
  };
};

export default nextConfig;
