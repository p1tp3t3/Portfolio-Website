import { useState } from "react";
import ImageCropper from "./image-crop";
import { base64ToFile } from "../../helper-function";

const ImageSelect = ({ profilePic, profileChange, required = false }) => {
    const [finalPic, setFinalPic] = useState(profilePic || null); // final cropped image
    const [preview, setPreview] = useState(null); // temporary selected image for cropping
    const [error, setError] = useState(null);
    const [enableCrop, setEnableCrop] = useState(false);

    // File selection handler
    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setPreview(reader.result);
            setEnableCrop(true);
        };
        reader.readAsDataURL(file);
    };

    // Handle cropped image
    const handleCropped = async (croppedBlob) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64data = reader.result;
            setFinalPic(base64data);
            setPreview(null);
            setEnableCrop(false);

            // Convert base64 to File object and call profileChange
            const file = base64ToFile(base64data, `profile_picture`);
            profileChange(file);
        };
        reader.readAsDataURL(croppedBlob);
    };

    return (
        <>
            {/* Image display when no cropper */}
            {!enableCrop && (
                <div className="relative">
                    <div className=" w-[15rem] h-[15rem] overflow-hidden flex-shrink-0 object-cover rounded-full border-5 border-blue-700">
                        <img
                            src={finalPic || profilePic}
                            alt="Profile"
                            className=""
                        />
                    </div>
                    <input
                        type="file"
                        name="profile_picture"
                        id="edit-pic"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                        required={required}
                    />
                    <label
                        htmlFor="edit-pic"
                        className="cursor-pointer w-[4rem] grid place-items-center bottom-0 right-1 h-[4rem] rounded-full absolute bg-blue-600 text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
                    </label>
                </div>
            )}

            {/* Cropper */}
            {preview && enableCrop && (
                <ImageCropper
                    onCropped={handleCropped}
                    preview={preview}
                    setPreview={setPreview}
                />
            )}

            {/* Error display */}
            {error && (
                <div className="text-[#d12323] text-[12px]">
                    <div className="transition-[0.2s] font-[1000]">{error}</div>
                </div>
            )}
        </>
    );
};

export default ImageSelect;
