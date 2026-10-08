// Universal safe mock client for Base44 standalone Vercel deployments

const safeAuth = {
  isAuthenticated: async () => false,
  me: async () => null,
  getUser: async () => null,
  useMe: () => ({ data: null, isLoading: false, error: null }),
  useUser: () => ({ data: null, isLoading: false, error: null }),
  login: async () => {},
  logout: async () => {},
  redirectToLogin: () => {},
  getToken: async () => null,
  getAccessToken: async () => null,
};

export const db = new Proxy({}, {
  get: (target, prop) => {
    if (prop === 'auth') return safeAuth;
    
    if (prop === 'entities') {
      return new Proxy({}, {
        get: (_, entityName) => new Proxy({}, {
          get: (_, method) => {
            // Return dummy React Hook state if component calls useFilter, useList, etc.
            if (typeof method === 'string' && method.startsWith('use')) {
              return () => ({ data: [], isLoading: false, error: null, refetch: () => {} });
            }
            // Return dummy async response for filter, get, create, update, delete
            return async () => [];
          }
        })
      });
    }

    if (prop === 'integrations') {
      return new Proxy({}, {
        get: () => new Proxy({}, {
          get: () => async () => ({ file_url: '' })
        })
      });
    }

    return async () => [];
  }
});

export const base44 = db;
export default db;
