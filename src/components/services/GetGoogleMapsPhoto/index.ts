export 
const GoogleMapsPhoto = async (placeName:string) => {

  try {

    let jsonData = {}
    // jsonData["urllink"] = link; 
    const options:{} = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };
    const response = await fetch('http://localhost:3001/get-place/' + placeName, options)
    const url = await response.json();
    return url.url;


    // return url;

    // Use the Google Places API to fetch photo reference

    const dataPlace = await response.json();

    console.log(dataPlace);

    if (dataPlace.candidates && dataPlace.candidates.length > 0) {
      const placeId = dataPlace.candidates[0].place_id;

      // Use the Google Places API to fetch photos based on place_id
      // let fetchURLPlacePhoto = `https://maps.googleapis.com/maps/api/place/photos?maxwidth=400&photoreference=${placeId}&key=${GOOGLEAPIKEY}`; 
      // const photoResponse = await fetch(
      //   fetchURLPlacePhoto, options
      // );

      // const photoData = await photoResponse.blob();
      // const imageUrl = URL.createObjectURL(photoData);
      // console.log(imageUrl);  
      // // imagesObj[placeLink] = imageUrl;
      // return imageUrl;
    }
  } catch (error) {
    console.error(`Error fetching image for ${placeName}: ${error}`);
  }
}
