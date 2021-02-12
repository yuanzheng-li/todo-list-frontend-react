export default async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error('Fetch failed');
    }
    const jsonRes = await response.json();
    return jsonRes;
  } catch(error) {
    throw error;
  }
}