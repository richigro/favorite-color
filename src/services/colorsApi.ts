const domain = "http://localhost:5000";

export const getColors = async () => {
  const response = await fetch(`${domain}/colors`);

  if (!response.ok) {
    throw new Error(`Could not retrieve all colors.`);
  }

  return await response.json();
};
