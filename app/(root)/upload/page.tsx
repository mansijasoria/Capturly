"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { title } from "process";
import React, { ChangeEvent, useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "",
  });
  const [error, setError] = useState(null);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

 
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        action=""
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
      >
        <FormField
          id="title"
          label="Title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Enter a clear and consise video title"
        />
        <FormField
          id="description"
          label="Description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe What this Video is about"
          as="textarea"
        />
        <FormField
          id="visibility"
          label="Visibility"
          value={formData.visibility}
          onChange={handleInputChange}
          placeholder="Describe What this Video is about"
          as="select"
          options={[
            {value: 'public', label: 'Public'},
            {value: 'private', label: 'Private'},
          ]}
        />
        <FileInput />
      </form>
    </div>
  );
};

export default page;
