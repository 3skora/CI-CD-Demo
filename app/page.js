'use client';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui' }}>
      <h1>CI/CD Demo Application</h1>
      <p>This is a simple Next.js app demonstrating automated CI/CD pipeline stages:</p>
      <ul>
        <li><strong>Lint:</strong> Automated code quality checks with ESLint</li>
        <li><strong>Test:</strong> Automated testing with Jest</li>
        <li><strong>Build:</strong> Automated build process</li>
        <li><strong>Deploy:</strong> Automated deployment configuration</li>
      </ul>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h2>API Route Example</h2>
        <p>Backend API route available at: <code>/api/hello</code></p>
        <button 
          onClick={async () => {
            const res = await fetch('/api/hello');
            const data = await res.json();
            alert(JSON.stringify(data, null, 2));
          }}
          style={{ 
            padding: '0.5rem 1rem', 
            backgroundColor: '#0070f3', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Test API Route
        </button>
      </div>
    </main>
  );
}
