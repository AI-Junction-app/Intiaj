export function getRandomRainbowColor(skipDelay = true) {
  const rainbowColors = [
    "cyan", // Lighter Red
    "#FFC266", // Lighter Orange
    "#FFFF99", // Lighter Yellow
    "#80FF80", // Lighter Green
    "#99CCFF", // Lighter Blue
    "#AA80FF", // Lighter Indigo
    "#F0C0FF", // Lighter Violet
  ];

  // Generate a random index between 0 and the length of the array
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);

  // Get the random color from the array
  const color = rainbowColors[randomIndex];

  // If skipDelay is true, return the color immediately
  if (skipDelay) {
    skipDelay = false;
    return new Promise((res) => {
      res(color);
    });
  }

  // Return a promise that resolves after a delay of 30 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(color);
    }, 3000); // 3 seconds delay (3,000 milliseconds)
  });
}
