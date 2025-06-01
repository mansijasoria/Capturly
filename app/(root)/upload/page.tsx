"use client";
import FileInput from "@/components/FileInput";
import FormField from "@/components/FormField";
import { MAX_THUMBNAIL_SIZE, MAX_VIDEO_SIZE } from "@/constants";
import { useFileInput } from "@/lib/hooks/useFileInput";
import { title } from "process";
import React, { ChangeEvent, FormEvent, useState } from "react";

const page = () => {

  const [isSubmitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    visibility: "",
  });

  const video = useFileInput(MAX_VIDEO_SIZE);
  const thumbnail = useFileInput(MAX_THUMBNAIL_SIZE);

  const [error, setError] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault();

    setSubmitting(true);

    try {
      if(!video.file || !thumbnail.file){
        setError('Please upload video and thumbnail');
        return;
      }
      if(!formData.title || !formData.description){
        setError('Please fill in all the details');
         return;
      }
    } catch (error) {
      console.log('Error Submitting form', error);
    } finally{
      setSubmitting(false);
    };

    // TODO
    // Upload Video to bunny
    // Upload the thumbnail to db
    // attach thumbnail
    //Create a new DB enrtry for the video Details(url, data)


  }
  return (
    <div className="wrapper-md upload-page">
      <h1>Upload a video</h1>
      {error && <div className="error-field">{error}</div>}
      <form
        action=""
        className="rounded-20 shadow-10 gap-6 w-full flex flex-col px-5 py-7.5"
        onSubmit={handleSubmit}
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
        <FileInput
          id="video"
          label="Video"
          accept="video/*"
          file={video.file}
          previewUrl={video.previewUrl}
          inputRef={video.inputRef}
          onChange={video.handleFileChange}
          onReset={video.resetFile}
          type="video" />

        <FileInput
          id="thumbnail"
          label="Thumbnail"
          accept="image/*"
          file={thumbnail.file}
          previewUrl={thumbnail.previewUrl}
          inputRef={thumbnail.inputRef}
          onChange={thumbnail.handleFileChange}
          onReset={thumbnail.resetFile}
          type="image" />

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

        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting?'Uploading...':'Upload video'}
        </button>
      </form>
    </div>
  );
};

export default page;
