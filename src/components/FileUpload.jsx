import React, { useState } from "react";
import { db } from "../../firebaseConfig.js";
import { collection, addDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    try {
      const docRef = await addDoc(collection(db, "files"), {
        name: file.name,
        ownerID: user.uid,
        path: "",
        type: file.type,
        size: file.size,
        sharedWith: [],
        versionHistory: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      await updateDoc(docRef, {
        fileID: docRef.id,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          placeholder="file"
          onChange={handleFileChange}
        />

        <button type="submit">Add File</button>
      </form>
      {file && (
        <div>
          <h3>User Data</h3>
          <p>Name: {file.name}</p>
          <p>Format: {file.type}</p>
          <p>Size: {file.size} bytes</p>
        </div>
      )}
    </>
  );
};

export default FileUpload;
