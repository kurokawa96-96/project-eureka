/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静的サイト(SSG)を基本とする。Vercelでもそのまま動作する。
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
