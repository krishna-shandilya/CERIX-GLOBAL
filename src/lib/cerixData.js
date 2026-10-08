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

const safeDb = new Proxy({}, {
  get: (target, prop) => {
    if (prop === 'auth') return safeAuth;
    if (prop === 'entities') {
      return new Proxy({}, {
        get: (_, entityName) => new Proxy({}, {
          get: (_, method) => {
            if (typeof method === 'string' && method.startsWith('use')) {
              return () => ({ data: [], isLoading: false, error: null, refetch: () => {} });
            }
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

const db = globalThis.__B44_DB__ || safeDb;
