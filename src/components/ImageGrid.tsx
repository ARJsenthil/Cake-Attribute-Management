import { CloudUpload, CloudUploadIcon, Image, ImageOff, Images, LucideUpload, LucideUploadCloud, Upload, UploadCloud, UploadCloudIcon } from "lucide-react";
import React, { useMemo, useState } from "react";

interface ImageGridProps {
    selectedShapes: string[];
    childCategories?: { name: string; childValues: string[] }[];
    images: Record<string, string>;
    setImages: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

const ImageGrid: React.FC<ImageGridProps> = ({
    selectedShapes,
    childCategories = [],
    images,
    setImages,
}) => {

    // Generate combinations (SHAPE + CHILDREN)
    const combinations = useMemo(() => {
        const base: { shape: string; childCombo: string[] }[] = [];

        selectedShapes.forEach((shape) => {
            if (childCategories.length === 0) {
                base.push({ shape, childCombo: [] });
                return;
            }

            const createCombo = (index: number, current: string[]) => {
                if (index === childCategories.length) {
                    base.push({ shape, childCombo: current });
                    console.log('check')
                    return;
                }
                console.log(index);
                (childCategories[index].childValues).forEach((val) => {
                    createCombo(index + 1, [...current, val]);
                });
            };

            createCombo(0, []);
        });

        return base;
    }, [selectedShapes, childCategories]);


    // ✔ Unique key per image combination
    const getKey = (shape: string, combo: string[]) => {
        return `${shape}__${combo.join("__")}`;
    };


    // Handle image upload
    const onUpload = (e: React.ChangeEvent<HTMLInputElement>, key: string) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const url = URL.createObjectURL(file);

        setImages((prev) => ({
            ...prev,
            [key]: url,
        }));
    };


    return (
        <div className="mt-4">
            <h2 className="text-gray-700 flex gap-2 items-center font-semibold mb-2 text-sm text-left">
                <Image /> Image Upload Configuration
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3">
                { combinations.length?combinations.map(({ shape, childCombo }, index) => {
                    const key = getKey(shape, childCombo);
                    const label = childCombo.length
                        ? `${shape} x ${childCombo.join(" x ")}`
                        : shape;

                    return (
                        <div
                            key={index}
                            className={`p- bordere`}
                        >

                            <div
                                className={`w-full h-32 border-2 border-dashed rounded-lg flex items-center justify-center relative cursor-pointer ${images[key]? "border-green-700": "border-gray-300"}`}
                            >
                                {images[key] ? (
                                    <div className=" text-sm">
                                        <p className="font-medium text-green-700">{label}</p>
                                    <img
                                        src={images[key]}
                                        alt=""
                                        className="w-[50%] h-[50%] m-auto rounded-lg "
                                    />
                                        <span className="text-green-700 text-sm">Image Uploaded</span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-3 text-sm">
                                        <p className="font-medium text-gray-700">{label}</p>
                                        <Upload size={19} className="m-auto"/>
                                        <span className="text-gray-400 text-sm"> Click to upload</span>
                                    </div>
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    onChange={(e) => onUpload(e, key)}
                                />
                            </div>
                        </div>
                    );
                }):
      <p className="">Add Primary Attributes / Add Child Values to add image combination</p>
                }
            </div>
        </div>
    );
};

export default ImageGrid;
