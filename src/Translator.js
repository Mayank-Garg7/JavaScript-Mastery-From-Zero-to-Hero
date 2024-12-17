import React, { useState } from "react";
import axios from 'axios';

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    setLoading(true);

    try {
      // LibreTranslate API
      const response = await axios.post(
        "https://libretranslate.com/translate",
        {
          q: inputText,
          source: "hi", // Source language: Hindi
          target: "en", // Target language: English
          format: "text",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setTranslatedText(response.data.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      alert("An error occurred while translating. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hindi to English Translator</h1>
      <textarea
        style={styles.textarea}
        rows="5"
        placeholder="Enter Hindi text..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>
      <button style={styles.button} onClick={handleTranslate} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>
      {translatedText && (
        <div style={styles.result}>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
  },
  title: { fontSize: "24px", marginBottom: "20px" },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  result: { marginTop: "20px", textAlign: "left" },
};

export default Translator;
