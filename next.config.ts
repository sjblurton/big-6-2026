import type { NextConfig } from "next";
import "./src/lib/env/client";
import "./src/lib/env/server";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
