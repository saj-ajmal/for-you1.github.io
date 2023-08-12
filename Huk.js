
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase,ref,set,get} from "https://www.gstatic.com/firebasejs/9.22.2//firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyAayba6WIDH1h9EAa8FyRM73YJ2hE77Ebc",
  authDomain: "personal-46e3f.firebaseapp.com",
  projectId: "personal-46e3f",
  storageBucket: "personal-46e3f.appspot.com",
  messagingSenderId: "859167208934",
  appId: "1:859167208934:web:529d52860e66b410131227"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const createMessage= async (Name, Message) => {
    try {
      // Create data
      await set(ref(database, `Message/${Name}`), {
        message: Message
      });
      console.log("message add");
      return true;
    } catch (error) {
      console.error("Error create Message", error);
      return false;
    }
  };
  
  const getMessage = async (Name) => {
    try {
      // Check Room ID
      const snapshot = await get(ref(database,`Message/${Name}`));
      if (snapshot.exists()) {
        console.log("Room exists!");
        const MessageData = snapshot.val();
        return true;
      } else {
        console.log("Message does not exist!");
        return false;
      }
    } catch (error) {
      console.error("Error Get Message", error);
      return false;
    }
  };



  createMessage("Hulk","Hello World");

















// let slideIndex = 1;

// function openModal() {
//     document.getElementById("myModal").style.display = "block";
// }

// function closeModal() {
//     document.getElementById("myModal").style.display = "none";
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("slide");
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex - 1].style.display = "block";
// }
