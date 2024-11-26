import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // Add axios for API calls
import { toast } from "react-toastify";  // Import toast for showing notifications

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("User ID:", userId);
    console.log("Password:", password);

    // Validate input fields
    if (userId === "" || password === "") {
      toast.error("Please fill in all fields!");
    } else {
      try {
        // Make the API call to verify the user credentials
        const response = await axios.post(process.env.REACT_APP_LOGIN_URL, {
          email: userId,
          password: password
        });

        // Handle successful login
        if (response.data.success) {
          // Save the authentication token to localStorage
          localStorage.setItem('Authorization', response.data.authToken);

          // Show success message
          toast.success("Login Successful", { autoClose: 500, theme: 'colored' });

          // Redirect the user to the home page or dashboard
          navigate("/home");
        } else {
          // Handle incorrect credentials
          toast.error("Invalid credentials, please try again.", { autoClose: 500, theme: 'colored' });
        }
      } catch (error) {
        // Handle error if API request fails
        toast.error("Something went wrong, please try again later.", { autoClose: 500, theme: 'colored' });
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Left side image */}
      <div style={styles.imageContainer}>
        <img
          src="https://petapixel.com/assets/uploads/2022/07/kate_2drivers_1024_compressed-2.gif"
          alt="login illustration"
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '600px',
          }}
        />
      </div>

      {/* Right side login form */}
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="userId">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={styles.input}
              placeholder="Enter your User ID"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your Password"
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        {/* Below credentials paragraph */}
        <div style={styles.paragraphContainer}>
          <p style={styles.paragraph}>
            Welcome back! Please login with your credentials to access the
            platform.
          </p>
          <p style={styles.paragraph}>
            If you don't have an account, <a href="/signup">sign up here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "white",
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspiphgxaXfyVBeg6RUsRpMGHSmQQ_7hjwhA&s')", // Add your image URL here
    backgroundSize: "cover", // Ensures the image covers the entire container
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    padding: "20px",
  },
  imageContainer: {
    flex: 1,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  formContainer: {
    width: "350px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  paragraphContainer: {
    marginTop: "20px",
    textAlign: "center",
  },
  paragraph: {
    fontSize: "14px",
    color: "#555",
  },
};

export default Login;
