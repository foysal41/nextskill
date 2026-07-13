import { toast } from "react-toastify";

export const uploadImage = async (file: File): Promise<string | null> => {

  if (!file) {
    toast.error("Something went wrong!");
    return null;
  }

  if (file.size > 5 * 1024 * 1024) {
    toast.error("Image size must be less than 5MB");
    return null;
  }

  const imageData = new FormData();
  imageData.append("image", file);

  try {

    const imageUploadKey = process.env.NEXT_PUBLIC_IMAGE_UPLOAD_API;

    const res = await fetch(
      `https://api.imgbb.com/1/upload?key=${imageUploadKey}`,
      {
        method: "POST",
        body: imageData,
      }
    );

    const data = await res.json();

    if (data.success) {
      toast.success("Image uploaded successfully");
      return data.data.url;
    }

    toast.error("Image upload failed");
    return null;

  } catch (error) {
    toast.error("Image upload error from server");
    return null;
  }
};