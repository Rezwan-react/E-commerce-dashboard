function getCookieByName(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim(); // Remove leading/trailing whitespace
    // Check if this cookie starts with the desired name followed by an equals sign
    if (cookie.startsWith(name + '=')) {
      // Extract and return the value
      return cookie.substring(name.length + 1);
    }
  }
  return null; // Cookie not found
}

export default getCookieByName
