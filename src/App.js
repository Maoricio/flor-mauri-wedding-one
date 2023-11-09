import { ChakraProvider } from "@chakra-ui/react";
import { chakraTheme } from "./styles/chakra";
import {
  HeaderPhoto,
  SubHeader,
  Countdown,
  Legend,
  Ceremony,
  Party,
  NotBaby,
  DressCode,
  SharePhotos,
  PhotosGallery,
  Present,
  InvitationForm,
  Contact,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <HeaderPhoto />
      <SubHeader />
      <Countdown />
      <Legend />
      <Ceremony />
      <Party />
      <NotBaby />
      <DressCode />
      <SharePhotos />
      <PhotosGallery />
      <Present />
      <InvitationForm />
      <Contact />
    </ChakraProvider>
  );
};

export default App;
