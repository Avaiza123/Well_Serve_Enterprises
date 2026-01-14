import { stytchClient, STYTCH_ORG_ID } from "../config/stytch.js";

/**
 * Send Magic Link (B2B)
 * POST /api/auth/login
 */
export const sendMagicLink = async (req, res) => {
  console.log("ENDPOINT:", req.originalUrl, "BODY:", req.body);
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    if (!STYTCH_ORG_ID) {
      return res.status(500).json({
        error: "STYTCH_ORG_ID is not configured for B2B authentication",
      });
    }

    const result =
      await stytchClient.organizations.magicLinks.email.loginOrSignup({
        organization_id: STYTCH_ORG_ID,
        email_address: email,
        login_redirect_url:
          process.env.LOGIN_REDIRECT_URL ||
          "http://localhost:3000/auth/callback",
        signup_redirect_url:
          process.env.SIGNUP_REDIRECT_URL ||
          "http://localhost:3000/auth/callback",
      });

    return res.status(200).json({
      success: true,
      result,
    });
  } catch (err) {
    console.error("Stytch sendMagicLink error:", err);

    return res.status(400).json({
      error: err?.error_message || err?.message || "Failed to send magic link",
      error_type: err?.error_type,
      error_url: err?.error_url,
    });
  }
};

/**
 * Authenticate Magic Link (B2B)
 * POST /api/auth/authenticate
 */
export const authenticateMagicLink = async (req, res) => {
  console.log("ENDPOINT:", req.originalUrl, "BODY:", req.body);
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }

  try {
    if (!STYTCH_ORG_ID) {
      return res.status(500).json({
        error: "STYTCH_ORG_ID is not configured for B2B authentication",
      });
    }

    const result = await stytchClient.magicLinks.authenticate({
      token,
      organization_id: STYTCH_ORG_ID,
      session_duration_minutes: 60,
    });

    return res.status(200).json({
      success: true,
      session: result.session,
      member: result.member,
    });
  } catch (err) {
    console.error("Stytch authenticateMagicLink error:", err);

    return res.status(400).json({
      error: err?.error_message || err?.message || "Authentication failed",
      error_type: err?.error_type,
      error_url: err?.error_url,
    });
  }
};
