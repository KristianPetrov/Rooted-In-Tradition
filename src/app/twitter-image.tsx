import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          backgroundImage: "url(/rooted-in-tradition.png)",
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


