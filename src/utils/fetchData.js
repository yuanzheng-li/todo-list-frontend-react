export default async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error('Operation failed');
    }
    const jsonRes = await response.json();
    return jsonRes;
  } catch(error) {
    throw error;
  }
}