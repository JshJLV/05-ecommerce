import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/15183134/LoZ_TotK_slide_mvk_v3-2048x700.jpg",
    thumbnail:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/15183134/LoZ_TotK_slide_mvk_v3-2048x700.jpg",
  },
  {
    original:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/15194920/starwarsjedi-suv_preventa_mvk-2048x700.jpg",
    thumbnail:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/15194920/starwarsjedi-suv_preventa_mvk-2048x700.jpg",
  },
  {
    original:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195523/Resident4_Disponible_slide_mvk_v2-2048x700.jpg",
    thumbnail:
      "https://cdn.gameplanet.com/wp-content/uploads/2023/03/23195523/Resident4_Disponible_slide_mvk_v2-2048x700.jpg",
  },
];

const Carousel = () => {
  return (
    <ImageGallery
      items={images}
      showFullscreenButton={false}
      showPlayButton={true}
      autoPlay={true}
    />
  );
};

export default Carousel;
