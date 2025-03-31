"use client";
import { useAuth } from "@clerk/nextjs";
import { BACKEND_URL } from "@/app/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { ImageCard, ImageCardSkeleton, TImage } from "./ImageCard";

export default function GeneratedImages() {
    const [images, setImages] = useState<TImage[]>([]);
    const [imagesLoading, setImagesLoading] = useState(true);
    const { getToken } = useAuth();

    useEffect(() => {
        (async() => {
            try {
                const token = await getToken();
                const response = await axios.get(`${BACKEND_URL}/image/bulk`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                
                console.log("Fetched Images:", response.data);
                
                // Filter images based on provider
                const allImages = response.data.images;
                setImages(allImages);
                setImagesLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);

    return (
        <>
            {images?.map(image => (
                <div key={image.id} className="mb-4">
                    <ImageCard {...image} />
                </div>
            ))}
            
            {imagesLoading && (
                <>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                    <div className="mb-4"><ImageCardSkeleton /></div>
                </>
            )}
        </>
    );
}
// Compare this snippet from apps/backend/index.ts:
// app.get("/image/bulk", authMiddleware, async (req, res) => {
//   console.log("Request received at /image/bulk");
//   console.log("Query params:", req.query);

//   let ids;
//   if (typeof req.query.ids === "string") {
//     ids = req.query.ids.split(",");
//   } else if (Array.isArray(req.query.ids)) {
//     ids = req.query.ids;
//   } else {
//     ids = [];
//   }

//   const limit = typeof req.query.limit === "string" ? parseInt(req.query.limit) : 10;
//   const offset = typeof req.query.offset === "string" ? parseInt(req.query.offset) : 0;

//   try {
//     const where = ids.length > 0
//       ? { id: { in: ids }, userId: req.userId! }
//       : { userId: req.userId! };

//     const imagesData = await prismaClient.outputImages.findMany({
//       where: {
//         ...where,
//         OR: [{ provider: "FALAI" }, { provider: "SEGMIND" }] // Fetch both FAL AI & SEGMIND images
//       },
//       skip: offset,
//       take: limit,
//       orderBy: {
//         createdat: "desc",
//       },

//     });

//     console.log(`Found ${imagesData.length} images`);

//     res.json({ images: imagesData });
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     res.status(500).json({
//       message: "Error fetching images",
//       error: error.message,
//     });
//   }
// });
