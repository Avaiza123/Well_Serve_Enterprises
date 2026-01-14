const { STYTCH_PROJECT_ID, STYTCH_SECRET, STYTCH_ENV, STYTCH_ORG_ID } = process.env;

let stytchClient;

try {
  const mod = await import("stytch");

  // Prefer B2B client when organization id is configured
  let candidateCtor = null;
  if (STYTCH_ORG_ID && mod.B2BClient) {
    candidateCtor = mod.B2BClient;
  }
  candidateCtor = candidateCtor ||
    mod.StytchClient ||
    mod.Client ||
    mod.Stytch ||
    (mod.default && (mod.default.StytchClient || mod.default.Client || mod.default.B2BClient || mod.default.Stytch || mod.default));

  // Build client config using SDK-provided envs when possible to avoid invalid URL
  const clientConfig = { project_id: STYTCH_PROJECT_ID, secret: STYTCH_SECRET };

  if (STYTCH_ENV === "test" || STYTCH_ENV === "live") {
    // prefer the SDK's env objects
    clientConfig.env = (mod.envs && mod.envs[STYTCH_ENV]) ? mod.envs[STYTCH_ENV] : STYTCH_ENV;
  } else if (STYTCH_ENV && STYTCH_ENV.startsWith && STYTCH_ENV.startsWith("http")) {
    // allow passing a custom base URL
    clientConfig.base_url = STYTCH_ENV;
  } else {
    // default to SDK test env when nothing sensible provided
    clientConfig.env = (mod.envs && mod.envs.test) ? mod.envs.test : STYTCH_ENV || "test";
  }

  if (typeof candidateCtor === "function") {
    console.log("Initializing Stytch client using:", candidateCtor.name || "constructor");
    stytchClient = new candidateCtor(clientConfig);
  } else if (mod && typeof mod.createClient === "function") {
    stytchClient = mod.createClient(clientConfig);
  } else {
    console.error("Inspect installed 'stytch' module keys:", Object.keys(mod));
    throw new Error("Unrecognized 'stytch' package export shape. Inspect installed package.");
  }
} catch (err) {
  console.error("Failed to initialize Stytch client:", err);
  throw err;
}

if (!STYTCH_SECRET) {
  console.warn("Warning: STYTCH_SECRET is not set. Set it in server/.env before running the server.");
}

export { stytchClient };

export { STYTCH_ORG_ID };
