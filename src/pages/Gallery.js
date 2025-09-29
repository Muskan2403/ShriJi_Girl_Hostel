import { onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { db } from "../firebase";

export default function Gallery({ isAdmin }) {
    const [index, setIndex] = useState(-1);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [galleryImages, setGalleryImages] = useState([]);

    useEffect(() => {
    const imagesRef = ref(db, "galleryImages");
    onValue(imagesRef, (snapshot) => {
        const data = snapshot.val();
        const uploadedImages = data
        ? Object.entries(data).map(([key, item]) => ({
            key, 
            src: item.url,
            title: item.title || "Uploaded Image",
        }))
        : [];

      // Combine uploaded images with default images
    const defaultImages = [
        { src: "/images/gallery/Office1.webp", title: "Office1" },
        { src: "/images/gallery/Office2.webp", title: "Office2" },
        { src: "/images/gallery/Office3.webp", title: "Office3" },
        { src: "/images/gallery/gallery.webp", title: "Gallery1" },
        { src: "/images/gallery/gallery1.webp", title: "Gallery6" },
        { src: "/images/gallery/gallery2.webp", title: "Gallery2" },
        { src: "/images/gallery/gallery3.webp", title: "Gallery3" },
        { src: "/images/gallery/gallery5.webp", title: "Gallery4" },
        { src: "/images/gallery/gallery4.webp", title: "Gallery5" },

    ];

    setGalleryImages([...uploadedImages, ...defaultImages]);
    });
    }, []);

    useEffect(() => {
        if (galleryImages.length === 0) return setImagesLoaded(false);

        let loadedCount = 0;
        galleryImages.forEach((img) => {
            const preloaded = new Image();
            preloaded.src = img.src;
            preloaded.onload = () => {
                loadedCount++;
                if (loadedCount === galleryImages.length) setImagesLoaded(true);
            };
        });
    }, [galleryImages]);

    const handleDelete = (img) => {
        if (!window.confirm("Are you sure you want to delete this image?")) return;

        // Remove from Firebase only if uploaded
        if (img.key) remove(ref(db, `galleryImages/${img.key}`));

        // Always remove from state to hide
        setGalleryImages((prev) => prev.filter((i) => i !== img));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">Gallery</h1>

                {imagesLoaded && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {galleryImages.map((img, idx) => (
                        <div
                        key={idx}
                        className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl">
                        <img src={img.src} alt={img.title} className="w-full h-64 object-cover" />

                        {isAdmin && (
                            <button
                            onClick={() => handleDelete(img)}
                            className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                            Delete
                            </button>
                        )}
                        </div>
                    ))}
                </div>
                )}

                <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={galleryImages.map((img) => ({ src: img.src, title: img.title }))}
                />
            </div>
        </div>
    );
}
