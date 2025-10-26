export default function AnimatedBackground() {
  return (
    <>
      {/* Moving soft gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Layer 1: base gradient (CSS in index.css) */}
        <div className="absolute inset-0 bg-app-gradient" />

        {/* Layer 2: animated highlight blobs */}
        <div className="absolute -top-1/3 -left-1/4 h-[80vh] w-[80vh] animate-blob1 rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/3 h-[70vh] w-[70vh] animate-blob2 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="absolute top-1/4 right-1/3 h-[50vh] w-[50vh] animate-blob3 rounded-full bg-violet-300/20 blur-3xl" />
      </div>

      {/* Subtle noise film for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.08] mix-blend-soft-light"
        style={{
          backgroundImage:
            // tiny seamless noise (data URI), keeps bundle local
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27 viewBox=%270 0 160 160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.85%27 numOctaves=%272%27 stitchTiles=%27stitch%27/%3E%3CfeColorMatrix type=%27saturate%27 values=%270%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url(%23n)%27 opacity=%270.45%27/%3E%3C/svg%3E")',
          backgroundSize: '160px 160px'
        }}
      />
    </>
  );
}
