export const fetchItems = async (url: string, headers: any) => {
  try {
    const response = await fetch(`${url}`, {
      headers,
    });
    const toJsonData = await response.json();

    return toJsonData;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const fetchItem = async (url: string, headers: any) => {
  try {
    const response = await fetch(`${url}`, {
      headers,
    });
    const toJsonData = await response.json();

    return toJsonData;
  } catch (err: any) {
    throw new Error(err);
  }
};
