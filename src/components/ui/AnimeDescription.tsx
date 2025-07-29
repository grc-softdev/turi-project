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
        <p className="text-[15px] leading-6">{description}</p>
      </div>
      <div className="mt-2 mb-2">
        <Button
          onClick={handleImprove}
          disabled={loading}
          variant="outlined"
          sx={{ mt: 2, mb: 2, display: "flex", alignItems: "center", gap: "8px" }}
        >
          
          <svg
  xmlns="http://www.w3.org/2000/svg"
  height="20"
  width="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <circle cx="12" cy="12" r="3" />
  <path d="M12 3v3" />
  <path d="M12 18v3" />
  <path d="M3 12h3" />
  <path d="M18 12h3" />
  <path d="M5.64 5.64l2.12 2.12" />
  <path d="M16.24 16.24l2.12 2.12" />
  <path d="M5.64 18.36l2.12-2.12" />
  <path d="M16.24 7.76l2.12-2.12" />
</svg>

          {loading ? "loading..." : "AI Generated description"}
        </Button>
      </div>
    </div>
  );
}