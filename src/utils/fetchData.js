export default async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if(!response.ok) {
      throw new Error('Operation failed');
    }

    if(response.status === 204) {
      return;
    }
    
    const jsonRes = await response.json();
    return jsonRes;
  } catch(error) {
    throw error;
  }
}