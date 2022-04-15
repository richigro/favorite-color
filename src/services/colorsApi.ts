const domain = "http://localhost:5000";

export const getColors = async () => {
  const response = await fetch(`${domain}/colors`);

  console.log("the response: ", response);
};
