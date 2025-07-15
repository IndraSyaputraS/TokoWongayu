"use client";
import { useEffect, useState } from "react";
import { RecomendationCardUser } from "@/components";

const RecomendationResult = () => {
  const [bundleData, setBundleData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("recommendation_bundle");
    if (stored) {
      const parsed = JSON.parse(stored); // array of bundles
      // langsung set datanya
      setBundleData(parsed); // ini akan berisi array dengan { bundle: [...], total: ... }
    }
  }, []);

  return (
    <>
      <RecomendationCardUser bundles={bundleData || []} />
    </>
  );
};

export default RecomendationResult;
