import React from "react";

const LazyImage = React.forwardRef((props, ref) => {
  const { src, alt, className, onLoad, loading } = props;

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      onLoad={onLoad}
      loading={loading}
    />
  );
});

export default LazyImage;
