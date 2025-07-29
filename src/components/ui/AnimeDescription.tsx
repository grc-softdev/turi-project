"use client";

import { useState } from "react";
import { Button } from "@mui/material";

type Props = {
  originalDescription: string;
  animeTitle: string;
};

export default function AnimeDescription({ originalDescription, animeTitle }: Props) {
  const [description, setDescription] = useState(originalDescription);
  const [loading, setLoading] = useState(false);

  const handleImprove = async () => {
    setLoading(true);

    const response = await fetch("/api/improve-description", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        description,
        animeTitle,
      }),
    });

    const data = await response.json();
    setDescription(data.improvedDescription);
    setLoading(false);
  };

  return (
    <div className="mb-4">
    <div className="max-h-60 overflow-y-auto pr-2">
      <p className="text-[15px] leading-6 ">{description}</p>
    </div>
    <div className="mt-2 mb-2">
    <Button onClick={handleImprove} disabled={loading} variant="outlined" sx={{ mt: 2, mb: 2 }}>
        {loading ? "loading..." : "improve description"}
      </Button>
      </div>
    </div>
  );
}