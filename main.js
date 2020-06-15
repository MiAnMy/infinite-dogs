const dogsContainer = document.getElementsByClassName("dogs-container")[0];
const modalCard = document.getElementsByClassName("modal-card")[0];
const modalPicture = document.getElementsByClassName("modal-picture")[0];
const showModal = (dogPic) => {
  modalPicture.src = dogPic;
  modalCard.style.display = "flex";
  modalCard.onclick = () => {
    hideModal();
  };
};

const hideModal = () => {
  modalPicture.src = "";
  modalCard.style.display = "none";
};

const createDogContainer = (dogPic) => {
  const dogContainer = document.createElement("img");
  dogContainer.className = "dog-container";
  dogContainer.src = dogPic;
  dogContainer.title = "show picture";
  dogContainer.onclick = () => showModal(dogPic);
  dogsContainer.appendChild(dogContainer);
};

const fetchDogs = () => {
  fetch("https://dog.ceo/api/breeds/image/random/50")
    .then((respones) => respones.json())
    .then((dogs) =>
      dogs.message.forEach((dogPic) => createDogContainer(dogPic))
    );
};

document.onscroll = () => {
  if (window.innerHeight + window.pageYOffset == document.body.offsetHeight)
    fetchDogs();
};

fetchDogs();
