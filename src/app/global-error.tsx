"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#050508", color: "#e4e4e7", fontFamily: "system-ui", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 8 }}>Something went wrong</h1>
          <p style={{ color: "#a1a1aa", marginBottom: 24 }}>Try refreshing the page.</p>
          <button
            onClick={reset}
            style={{
              padding: "12px 24px",
              background: "#00ffc8",
              color: "#050508",
              fontWeight: 600,
              border: "none",
              borderRadius: 9999,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
