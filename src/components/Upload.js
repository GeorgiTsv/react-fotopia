import { useState, useRef } from "react";
import "./styling/upload.css";
// import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const Upload = ({ firebase }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const descriptionRef = useRef();
  const locationRef = useRef();
  const makeRef = useRef();
  const modelRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      const imageURL = URL.createObjectURL(e.target.files[0]);
      const url = 'url(' + imageURL + ')';
      // console.log(url);
      document.getElementById('imageInput').style.backgroundImage = url;
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    const storage = firebase.storage();
    const storageRef = storage.ref();
    const path = "postIm/" + image.name;
    // Upload image to storage
    const uploadTask = storageRef.child(path).put(image);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // You can track upload progress here
      },
      (error) => {
        console.error(error);
      },
      () => {
        // console.log("success");
        // Get the download URL of the uploaded image
        storageRef.child(path).getDownloadURL().then((url) => {
          setImageUrl(url);
          // console.log("url is: " + url);

          // Upload additional information to Firebase Database
          const database = firebase.database();
          const feedRef = database.ref('feed'); // Change 'images' to your desired database path

          // Add your predefined info along with the image URL
          feedRef.push({
            photo: url,
            name: "fake account",
            description: descriptionRef.current.value,
            location: locationRef.current.value,
            camera: makeRef.current.value + " " + modelRef.current.value
          });

          console.log('Image uploaded successfully!');
        });
      }
    );
  };


  return (
    <div className="upload Correction FullWidth">
      <form onSubmit={handleUpload} id="uploadForm">
        <input type="file" className="imageInput" accept="image/*" id="imageInput" name="fname" title=" " onChange={handleFileChange} />
        <div className="description">
          <label>Description</label>
          <input type="text" ref={descriptionRef} />
        </div>

        <div className="location">
          <label>Location</label>
          <input type="text" ref={locationRef} />
        </div>


        <label className="cameraFix">Camera</label>
        <div className="camera-container">

          <input type="text" placeholder="Make" ref={makeRef} />
          <input type="text" placeholder="Model" ref={modelRef} />
          <input type="text" placeholder="Focal lenght (mm)" />
          <input type="text" placeholder="Aperture" />
          <input type="text" placeholder="Shutter Speed (s)" />
          <input type="text" placeholder="ISO" />
        </div>

        <div className="categories">
          <div className="row">
            <div className="nature textImage">
              <img src={process.env.PUBLIC_URL + 'nature.png'} alt="Nature" />
              <p>Nature</p>
            </div>

            <div className="landscape textImage">
              <img src={process.env.PUBLIC_URL + 'landscape.png'} alt="Landscape" />
              <p>Landscape</p>
            </div>

            <div className="urban textImage">
              <img src={process.env.PUBLIC_URL + 'urban.png'} alt="Urban" />
              <p>Urban</p>
            </div>


            <div className="architecture textImage">
              <img src={process.env.PUBLIC_URL + 'architecture.png'} alt="architecture" />
              <p>Architecture</p>
            </div>

            <div className="foodAndDrinks textImage">
              <img src={process.env.PUBLIC_URL + 'food and drinks.png'} alt="food and drinks" />
              <p>Food and drinks</p>
            </div>

            <div className="fashion textImage">
              <img src={process.env.PUBLIC_URL + 'fashion.png'} alt="fashion" />
              <p>Fashion</p>
            </div>
          </div>
          <div className="row">
            <div className="travel textImage">
              <img src={process.env.PUBLIC_URL + 'travel.png'} alt="travel" />
              <p>Travel</p>
            </div>

            <div className="portrait textImage">
              <img src={process.env.PUBLIC_URL + 'portrait.png'} alt="portrait" />
              <p>Portraits</p>
            </div>

            <div className="people textImage">
              <img src={process.env.PUBLIC_URL + 'people.png'} alt="people" />
              <p>People</p>
            </div>

            <div className="macro textImage">
              <img src={process.env.PUBLIC_URL + 'macro.png'} alt="macro" />
              <p>Macro</p>
            </div>


            <div className="sportsAndAction textImage">
              <img src={process.env.PUBLIC_URL + 'sports and action.png'} alt="sports and action" />
              <p>Sports and action</p>
            </div>

            <div className="abstract textImage">
              <img src={process.env.PUBLIC_URL + 'abstract.png'} alt="abstract" />
            </div>
          </div>
        </div>
        <input type="submit" className="submitbutton" value="Upload" />
      </form>
    </div>

  );
};

export default Upload;