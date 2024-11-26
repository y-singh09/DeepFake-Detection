import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null); // Track upload status

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prevUrls) => [...prevUrls, ...urls]);
  };

  // Handle the file upload process
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      alert("Please select a file to upload");
      return;
    }

    // Create a FormData object to handle multiple files
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file); // Append each file
    });

    try {
      const response = await axios.post("http://localhost:5000/upload-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      

      // Handle success response from Flask
      setUploadStatus(response.data.random_value);
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus(false); // Indicate an error occurred
    }
  };

  // Remove a file from the list
  const handleRemoveFile = (indexToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((_, index) => index !== indexToRemove));
    setPreviewUrls((prevUrls) => prevUrls.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Upload Images and Videos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={handleFileChange}
          style={{
            margin: "20px 0",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Upload
        </button>
      </form>

      {uploadStatus !== null && (
        <div>
          {uploadStatus ? (
            <p style={{ color: "green" }}>File uploaded successfully!</p>
          ) : (
            <p style={{ color: "red" }}>There was an error uploading the file.</p>
          )}
        </div>
      )}

      {previewUrls.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Preview:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {previewUrls.map((url, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                {files[index].type.startsWith("image") ? (
                  <img
                    src={url}
                    alt="Preview"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  />
                ) : (
                  <video
                    src={url}
                    controls
                    style={{ width: "150px", height: "150px" }}
                  />
                )}
                <br />
                <button
                  onClick={() => handleRemoveFile(index)}
                  style={{
                    marginTop: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
