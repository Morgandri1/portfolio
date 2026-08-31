import React, { useState } from "react";

const publicUrl = (src) => (src && src.startsWith("/") ? `${process.env.PUBLIC_URL}${src}` : src);

// A framed image that falls back to a labelled placeholder when there is no
// source (or the source fails to load) — mirrors the design's <image-slot>.
export default function ImageSlot({ src, alt = "", fit = "cover", radius = 6, position, placeholder, className = "", style }) {
  const [failed, setFailed] = useState(false);
  const show = src && !failed;
  return (
    <div className={`mm-slot ${className}`.trim()} style={{ borderRadius: radius, ...style }}>
      {show ? (
        <img
          src={publicUrl(src)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{ objectFit: fit, objectPosition: position }}
        />
      ) : (
        <div className="mm-slot-empty" style={{ borderRadius: radius }}>{placeholder}</div>
      )}
    </div>
  );
}
