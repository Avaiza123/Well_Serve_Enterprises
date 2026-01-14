import dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

try {
  const mod = await import("stytch");
  console.log("stytch module keys:", Object.keys(mod));

  const { STYTCH_PROJECT_ID, STYTCH_SECRET, STYTCH_ENV, STYTCH_ORG_ID } = process.env;
  console.log({ STYTCH_PROJECT_ID, STYTCH_ENV, STYTCH_ORG_ID });

  let candidateCtor = null;
  if (STYTCH_ORG_ID && mod.B2BClient) candidateCtor = mod.B2BClient;
  candidateCtor = candidateCtor || mod.StytchClient || mod.Client || mod.Stytch || (mod.default && (mod.default.StytchClient || mod.default.Client || mod.default.B2BClient || mod.default.Stytch || mod.default));

  const clientConfig = { project_id: STYTCH_PROJECT_ID, secret: STYTCH_SECRET };
  if (STYTCH_ENV === "test" || STYTCH_ENV === "live") {
    clientConfig.env = (mod.envs && mod.envs[STYTCH_ENV]) ? mod.envs[STYTCH_ENV] : STYTCH_ENV;
  } else if (STYTCH_ENV && STYTCH_ENV.startsWith && STYTCH_ENV.startsWith("http")) {
    clientConfig.base_url = STYTCH_ENV;
  } else {
    clientConfig.env = (mod.envs && mod.envs.test) ? mod.envs.test : STYTCH_ENV || "test";
  }

  let client;
  if (typeof candidateCtor === "function") {
    console.log("Using constructor:", candidateCtor.name || "constructor");
    client = new candidateCtor(clientConfig);
  } else if (mod && typeof mod.createClient === "function") {
    console.log("Using createClient factory");
    client = mod.createClient(clientConfig);
  } else {
    console.error("No client constructor or factory found on module");
    process.exit(1);
  }

  console.log("client keys:", Object.keys(client));
  if (client.magicLinks) {
    console.log("magicLinks keys:", Object.keys(client.magicLinks));
    if (client.magicLinks.email) {
      console.log("magicLinks.email keys:", Object.keys(client.magicLinks.email));
    }
  }
} catch (err) {
  console.error("inspect failed:", err);
  process.exit(1);
}
