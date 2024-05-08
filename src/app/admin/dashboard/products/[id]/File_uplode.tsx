import { useState, useRef } from "react";

interface File {
  name: string;
}

type UploadProgressEvent = ProgressEvent;

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    setSelectedFiles(Array.from(files)); // Convert FileList to array
  };

  const handleUpload = async () => {
    setProgress(0); // Reset progress before upload

    const formData = new FormData();
    // for (let i = 0; i < selectedFiles.length; i++) {
    //   formData.append("file", selectedFiles[i]);
    // }

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        // onUploadProgress: (event: UploadProgressEvent) => {
        //   const uploadedBytes = event.loaded;
        //   const totalBytes = event.total;
        //   const uploadProgress = Math.round((uploadedBytes / totalBytes) * 100);
        //   setProgress(uploadProgress);
        // },
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      setSelectedFiles([]); // Clear selected files after successful upload
      console.log("Upload successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="file-upload"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        Select files
      </label>
      <input
        id="file-upload"
        type="file"
        multiple
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-text text-white transition ease-in-out duration-150 cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        Browse Files
      </button>
      {selectedFiles.length > 0 && (
        <>
          <div className="mt-4">
            <p className="text-base font-medium text-gray-700">
              Selected Files:
            </p>
            <ul>
              {selectedFiles.map((file) => (
                <li key={file.name} className="text-sm text-gray-500">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <progress
              className="w-full h-2 bg-gray-200 rounded-full"
              value={progress}
              max="100"
            />
            <p className="text-xs text-gray-500">{progress}%</p>
          </div>
          <button
            type="button"
            disabled={progress === 0 || progress === 100}
            className={`inline-flex items-center px-4 py-2 ${
              progress === 0 || progress === 100
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
            } font-medium rounded-text text-white transition ease-in-out duration-150`}
            onClick={handleUpload}
          >
            {progress === 0
              ? "Upload"
              : progress === 100
              ? "Success"
              : "Uploading..."}
          </button>
        </>
      )}
    </div>
  );
};

export default FileUpload;
