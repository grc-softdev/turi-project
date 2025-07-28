// "use client";

// import { useState } from "react";
// import { Button } from "@mui/material";

// type Props = {
//   originalDescription: string;
//   animeTitle: string;
// };

// export default function AnimeDescription({ originalDescription, animeTitle }: Props) {
//   const [description, setDescription] = useState(originalDescription);
//   const [loading, setLoading] = useState(false);

//   const handleImprove = async () => {
//     setLoading(true);

//     const response = await fetch("/api/improve-description", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         description,
//         animeTitle,
//       }),
//     });

//     const data = await response.json();
//     setDescription(data.improvedDescription);
//     setLoading(false);
//   };

//   return (
//     <div>
//       <p className="text-[15px] leading-6">{description}</p>
//       <Button onClick={handleImprove} disabled={loading} variant="outlined" sx={{ mt: 2 }}>
//         {loading ? "Carregando..." : "Melhorar descrição"}
//       </Button>
//     </div>
//   );
// }/