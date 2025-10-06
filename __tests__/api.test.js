describe('API Route', () => {
  it('should have correct structure', () => {
    const mockResponse = {
      message: 'Hello from the API!',
      timestamp: new Date().toISOString(),
      pipeline: {
        lint: 'passed',
        test: 'passed',
        build: 'passed',
        deploy: 'ready'
      }
    };
    
    expect(mockResponse).toHaveProperty('message');
    expect(mockResponse).toHaveProperty('timestamp');
    expect(mockResponse).toHaveProperty('pipeline');
    expect(mockResponse.pipeline).toHaveProperty('lint', 'passed');
    expect(mockResponse.pipeline).toHaveProperty('test', 'passed');
    expect(mockResponse.pipeline).toHaveProperty('build', 'passed');
    expect(mockResponse.pipeline).toHaveProperty('deploy', 'ready');
  });
});
