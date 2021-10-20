import createAuth0Client, {
  Auth0Client,
  Auth0ClientOptions,
} from '@auth0/auth0-spa-js';

/*
 * This class represents an asynchronously loaded Auth0 client. Instead of the application synchronously accessing
 * a client that will be null until it finishes initializing, the application can access a promise that will resolve
 * when the client finishes initializing.
 */
export default class AsyncAuth0Client {
  // Has the client been created yet
  initialized = false;

  // The client, which will be null until it finishes loading
  client: Auth0Client | null = null;

  // The asynchronously loaded client, which will never resolve unless init is called
  clientPromise: Promise<Auth0Client>;

  // Call when the client has been loaded to resolve the clientPromise
  resolveLoadClient!: (value: Auth0Client) => void;

  // Call when the client has failed to load to reject the clientPromise
  rejectLoadClient!: (reason: unknown) => void;

  constructor() {
    // Create a Promise that will be fulfilled after init is called and the client is created
    this.clientPromise = new Promise((resolve, reject) => {
      this.resolveLoadClient = resolve;
      this.rejectLoadClient = reject;
    });
  }

  // Initialize the Auth0 client with the provided options
  // May only be called once
  init(options: Auth0ClientOptions): Promise<Auth0Client> {
    if (this.initialized) {
      throw new Error('Async auth client is already initialized');
    }

    this.initialized = true;

    const clientPromise = createAuth0Client(options);
    clientPromise
      .then((client) => {
        this.client = client;
        this.resolveLoadClient(client);
      })
      .catch((error) => {
        this.rejectLoadClient(error);
      });
    return clientPromise;
  }

  async getClient(): Promise<Auth0Client> {
    return this.clientPromise;
  }
}
