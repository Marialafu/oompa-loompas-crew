const API_URL =
  "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas";

const getOompaCrew = async (page) => {
  try {
    const response = await fetch(`${API_URL}?page=${page}`, {
      method: "GET",
    });

    const oompaCrew = await response.json();
    return oompaCrew;
  } catch (error) {
    console.error("Error in getOompaCrew", error.message);
  }
};

const getOompaById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "GET",
    });

    const oompa = await response.json();
    return oompa;
  } catch (error) {
    console.error("Error getting Oompa by ID", error.message);
  }
};

export { getOompaCrew, getOompaById };
