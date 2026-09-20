const API_URL =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=3";

const getOompaCrew = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
    });

    const oompaCrew = await response.json();
    return oompaCrew;
  } catch (error) {
    console.error("Error in getOompaCrew", error.message);
  }
};

export { getOompaCrew };
