export async function GET() {
  return Response.json({
    message: 'Hello from the API!',
    timestamp: new Date().toISOString(),
    pipeline: {
      lint: 'passed',
      test: 'passed',
      build: 'passed',
      deploy: 'ready'
    }
  });
}
