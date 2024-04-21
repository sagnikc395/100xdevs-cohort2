import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const otpStore: Record<string, string> = {};

//endpoint to generate and use OTP
app.post("/otp", (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  //generate some random otp - not cryptographically secure or follows
  // TOTP protocol
  const otp = Math.floor(10000 + Math.random() * 90000).toString();

  //map the otp to the email , and store in into memory
  otpStore[email] = otp;
  console.log(`OTP for ${email}: ${otp}`);
  res.status(200).json({
    message: "OTP generated and logged",
  });
});

//attacker should attack here
app.post("/reset-password", (req, res) => {
  const { email, otp, newPassword } = req.body;
  if (!email || !otp || !newPassword) {
    return res
      .status(400)
      .json({ message: "Email, OTP, and new password are required" });
  }
  if (otpStore[email] === otp) {
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    delete otpStore[email]; // Clear the OTP after use
    res.status(200).json({ message: "Password has been reset successfully" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(PORT, () => {
  console.log(`Dev server started at http://localhost:${PORT}`);
});
