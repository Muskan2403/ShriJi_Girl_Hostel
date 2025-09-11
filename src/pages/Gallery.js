// import { useEffect, useState } from "react";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// import gallery0 from "../assets/gallery/gallery.jpg";
// import gallery1 from "../assets/gallery/gallery1.jpg";
// import gallery2 from "../assets/gallery/gallery2.jpg";
// import gallery3 from "../assets/gallery/gallery3.jpg";
// import gallery4 from "../assets/gallery/gallery4.jpg";
// import gallery5 from "../assets/gallery/gallery5.jpg";

// const galleryImages = [
//     { src: gallery0, title: "Event 1" },
//     { src: gallery1, title: "Event 2" },
//     { src: gallery2, title: "Event Area 1" },
//     { src: gallery3, title: "Event Area 2" },
//     { src: gallery4, title: "Event 3" },
//     { src: gallery5, title: "Event 4" },
// ];

// export default function Gallery() {
//     const [index, setIndex] = useState(-1);
//     const [imagesLoaded, setImagesLoaded] = useState(false);

//     useEffect(() => {
//         // Preload images and wait until all are loaded
//         let loadedCount = 0;
//         galleryImages.forEach((img) => {
//             const preloaded = new Image();
//             preloaded.src = img.src;
//             preloaded.onload = () => {
//                 loadedCount++;
//                 if (loadedCount === galleryImages.length) {
//                     setImagesLoaded(true);
//                 }
//             };
//         });
//     }, []);

//     return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100 ">
//         <div className="max-w-7xl mx-auto px-4 py-16">
//             <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
//                 Gallery
//             </h1>

//             {imagesLoaded && (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                     {galleryImages.map((img, idx) => (
//                         <div
//                             key={idx}
//                             className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl"
//                             onClick={() => setIndex(idx)}
//                         >
//                             <img
//                                 src={img.src}
//                                 alt={img.title}
//                                 className="w-full h-64 object-cover"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             )}

//             <Lightbox
//                 open={index >= 0}
//                 close={() => setIndex(-1)}
//                 index={index}
//                 slides={galleryImages.map((img) => ({ src: img.src, title: img.title }))}
//             />
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const galleryImages = [
    { src: "/images/gallery/gallery.webp", title: "Event 1" },
    { src: "/images/gallery/gallery1.webp", title: "Event 2" },
    { src: "/images/gallery/gallery2.webp", title: "Event Area 1" },
    { src: "/images/gallery/gallery3.webp", title: "Event Area 2" },
    { src: "/images/gallery/gallery4.webp", title: "Event 3" },
    { src: "/images/gallery/gallery5.webp", title: "Event 4" },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        // Preload images and wait until all are loaded
        let loadedCount = 0;
        galleryImages.forEach((img) => {
            const preloaded = new Image();
            preloaded.src = img.src;
            preloaded.onload = () => {
                loadedCount++;
                if (loadedCount === galleryImages.length) {
                    setImagesLoaded(true);
                }
            };
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-pink-50 to-pink-100">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-pink-600 mb-12 text-center">
                    Gallery
                </h1>

                {imagesLoaded && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transform transition-all duration-300 hover:shadow-purple-500/25 hover:shadow-2xl"
                                onClick={() => setIndex(idx)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-full h-64 object-cover"
                                />
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
