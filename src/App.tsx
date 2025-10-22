// This file is not used in the build process
// This is a Next.js project, not a Vite/React SPA
// The actual application entry point is frontend/src/app/layout.tsx

export default function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>Build Configuration Note</h1>
      <p>This file is not used. This is a Next.js application.</p>
      <p>The actual application is located in the <code>frontend/</code> directory.</p>
      <p>Build command: <code>npm run build</code> (which runs <code>cd frontend && npm run build</code>)</p>
    </div>
  );
}
