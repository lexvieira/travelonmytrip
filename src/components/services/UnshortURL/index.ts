export const getExpandedURL = async (link:string) => {
    try {
      let jsonData = {}
      jsonData["urllink"] = link;
      const options:{} = {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      };
      const response = await fetch('http://localhost:3001/unshort-url', options)
      const url = await response.json();
      return url.url;
      // console.log(url);
    } catch (error) {
      console.error(`Error fetching image for ${link}: ${error}`);
    }
  }
  