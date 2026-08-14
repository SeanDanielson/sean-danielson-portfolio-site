import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#14130f",
          color: "#f4eddb",
          fontSize: 86,
          fontStyle: "italic",
          fontWeight: 600,
        }}
      >
        SD
      </div>
    ),
    { ...size },
  );
}
