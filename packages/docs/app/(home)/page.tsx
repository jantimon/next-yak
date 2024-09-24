import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        maxWidth: "80ch",
        margin: "4rem auto",
      }}
    >
      <img
        src="/yak-header.png"
        height="1024"
        width="1024"
        alt="Image of yak coding"
      />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "2rem 0 1rem",
        }}
      >
        Next-Yak
      </h1>
      <p>
        A CSS-in-JS solution tailored for Next.js that seamlessly combines the
        expressive power of styled-components syntax with efficient build-time
        extraction of CSS using Next.js's built-in CSS configuration.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "4rem",
          marginTop: "2rem",
        }}
      >
        <Link
          href={"/docs/getting-started"}
          style={{
            textUnderlineOffset: "2px",
            textDecoration: "underline",
          }}
        >
          Get started
        </Link>
        <Link
          href={"https://github.com/jantimon/next-yak"}
          style={{
            textUnderlineOffset: "2px",
            textDecoration: "underline",
          }}
        >
          Github
        </Link>
      </div>
    </main>
  );
}
