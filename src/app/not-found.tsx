import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>Page Not Found</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#f7fafc",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1.5rem",
            backgroundColor: "#ffffff",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderRadius: "0.5rem",
            width: "100%",
            maxWidth: "28rem",
          }}
        >
          <h1
            style={{
              fontSize: "4rem",
              fontWeight: "800",
              color: "#e53e3e",
              marginBottom: "1rem",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontWeight: "600",
              color: "#2d3748",
              marginBottom: "1rem",
              fontSize: "4rem",
            }}
          >
            Page Not Found
          </h2>
          <p style={{ color: "#718096", marginBottom: "1.5rem" }}>
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            style={{
              fontSize: "1.125rem",
              color: "#ffffff",
              backgroundColor: "#3182ce",
              padding: "0.5rem 1rem",
              borderRadius: "0.375rem",
              transition: "background-color 0.2s",
              textDecoration: "none",
            }}
          >
            Return Home
          </Link>
        </div>
      </body>
    </html>
  );
}
