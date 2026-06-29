import type { NextConfig } from "next";
import "./src/lib/env/client";
import "./src/lib/env/server";

const nextConfig: NextConfig = {
  reactCompiler: true,
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
