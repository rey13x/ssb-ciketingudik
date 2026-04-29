/**
 * Helper function to get image source with format fallback
 * Tries multiple formats: JPEG, PNG, WebP
 */
export const getImageSrc = (imageName: string): string => {
  // Return JPEG by default (most compatible and smaller)
  return `/images/${imageName}.jpeg`;
};

/**
 * Get fallback image source if primary format fails
 */
export const getImageFallback = (imageName: string): string => {
  return `/images/${imageName}.png`;
};

/**
 * Create srcSet for responsive images
 */
export const getImageSrcSet = (imageName: string): string => {
  const jpeg = `/images/${imageName}.jpeg`;
  const png = `/images/${imageName}.png`;
  return `${jpeg} 1x, ${jpeg} 2x`;
};

/**
 * Validate image exists and return correct path
 */
export const validateImagePath = async (imagePath: string): Promise<string> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    if (response.ok) {
      return imagePath;
    }
    // Try alternate format
    const alternatePath = imagePath.includes('.jpeg') 
      ? imagePath.replace('.jpeg', '.png')
      : imagePath.replace('.png', '.jpeg');
    const altResponse = await fetch(alternatePath, { method: 'HEAD' });
    return altResponse.ok ? alternatePath : imagePath;
  } catch {
    return imagePath;
  }
};
