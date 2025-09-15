import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

function getBaseUrl() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;
  if (siteUrl) return siteUrl;
  if (vercelUrl) return `https://${vercelUrl}`;
  return "http://localhost:3000";
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#07090d",
          backgroundImage: `url(${new URL("/rooted-in-tradition.png", getBaseUrl()).toString()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ),
    {
      ...size,
    }
  );
}


