const domain = "http://localhost:5000";

interface ColorsData<T> {
  data: T[];
}

interface Color {
  label: string;
  value: string;
}

export const getColors = async (): Promise<ColorsData<Color>> => {
  const response = await fetch(`${domain}/colors`);

  if (!response.ok) {
    throw new Error(`Could not retrieve all colors.`);
  }

  return await response.json();
};
