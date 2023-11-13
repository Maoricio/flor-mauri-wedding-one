import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  VStack,
  Heading,
  Text,
  Image,
  HStack,
  UnorderedList,
  ListItem,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import isEmpty from "lodash.isempty";
import { SectionWrapper } from "../../common/components";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import invitation from "../../common/assets/invitation.gif";
import food from "../../common/assets/food.gif";
import libMusic from "../../common/assets/libMusic.gif";

const listadoCasamientoRef = collection(db, "listadoCasamiento");

export const InvitationForm = () => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [errorDNIMsg, setErrorDNIMsg] = useState(false);
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");

  const removeWhiteSpace = (value) => value.trim();

  const onSubmit = async (invitation) => {
    setIsLoading(true);
    setSuccessMsg(false);
    setErrorMsg(false);
    setErrorDNIMsg(false);

    invitation["allSongs"] = songs && !!songs.length ? songs : [];

    const { completeName, food, allSongs, nroDNI } = invitation;

    const newInvitation = {
      nombre_apellido: removeWhiteSpace(completeName),
      dni: removeWhiteSpace(nroDNI),
      acompanado: false,
      limitacion_alimntaria: removeWhiteSpace(food),
      canciones: allSongs.map((song) => removeWhiteSpace(song)),
    };

    const q = query(
      listadoCasamientoRef,
      where("dni", "==", newInvitation.dni)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      setIsLoading(false);
      setErrorDNIMsg(true);
    } else {
      addDoc(listadoCasamientoRef, newInvitation)
        .then((data) => {
          setIsLoading(false);
          setSuccessMsg(true);
        })
        .catch(() => {
          setIsLoading(false);
          setErrorMsg(true);
        });
    }
  };

  const addSong = () => {
    if (newSong.trim() !== "") {
      setSongs([...songs, newSong]);
      setNewSong("");
    }
  };

  const removeSong = (index) => {
    const updatedSongs = [...songs];
    updatedSongs.splice(index, 1);
    setSongs(updatedSongs);
  };

  function formIsDisabled() {
    const allFields = watch();
    delete allFields.food;
    if (isEmpty(allFields)) return true;
    for (let field in allFields) {
      if (allFields.hasOwnProperty(field)) {
        if (isEmpty(allFields[field])) {
          return true;
        }
      }
    }
    return false;
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    const trimmedValue = value.trimStart();
    setValue(e.target.name, trimmedValue);
  };

  return (
    <SectionWrapper padding={"50px 30px 0 30px"} mb={"100px"}>
      <VStack>
        {successMsg && (
          <VStack>
            <Alert status="success">
              <AlertIcon />
              Asistencia confirmada, nos vemos el 10/02/2024
            </Alert>
          </VStack>
        )}

        {isLoading && (
          <VStack alignItems={"center"} gap={2}>
            <Image src={invitation} alt={"GIF"} w={"50px"} h={"50px"} />
            <Heading
              fontFamily={"Poppins"}
              fontWeight={600}
              size={"headline"}
              textTransform={"uppercase"}
              fontSize={"20px"}
              letterSpacing={"3px"}
            >
              Guardando invitación
            </Heading>
            <Spinner size={"lg"} color={"#5e9a8e"} />
          </VStack>
        )}

        {!isLoading && !successMsg && (
          <VStack alignItems={"flex-start"} mb={"25px"}>
            <VStack
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              mb={"25px"}
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight={600}
                size={"headline"}
                textTransform={"uppercase"}
                fontSize={"20px"}
                letterSpacing={"3px"}
                textAlign={"center"}
              >
                Confirma tu asistencia
              </Heading>
              <Text fontSize={"20px"} fontWeight={900} color={"#5e9a8e"}>
                Por favor, confirmanos antes del 10 de Enero
              </Text>
            </VStack>

            <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
              <FormControl mb={"20px"}>
                <FormLabel htmlFor="completeName">Nombre y Apellido*</FormLabel>
                <Input
                  id="completeName"
                  {...register("completeName", {
                    required: true,
                  })}
                  focusBorderColor={"#5e9a8e"}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl mb={"20px"}>
                <FormLabel htmlFor="nroDNI">Nro Documento*</FormLabel>
                <Input
                  id="nroDNI"
                  type="number"
                  {...register("nroDNI", {
                    required: true,
                  })}
                  focusBorderColor={"#5e9a8e"}
                  onChange={handleInputChange}
                />
              </FormControl>

              <VStack gap={2} m={"35px 0px"}>
                <Image src={food} alt={"GIF"} w={"50px"} h={"50px"} />
                <Text textAlign={"center"} maxW={"325px"}>
                  Deseamos que disfrutes de nuestra boda tanto como nosotros,
                  por eso, si tenes alguna alergia o intolerancia alimentaria,
                  por favor AVISANOS!
                </Text>
              </VStack>

              <FormControl mb={"35px"}>
                <FormLabel htmlFor="food">
                  Alergia/intolerancia alimentaria?
                </FormLabel>
                <Input
                  id="food"
                  {...register("food")}
                  focusBorderColor={"#5e9a8e"}
                />
              </FormControl>

              <VStack gap={2} m={"35px 0px"}>
                <Image src={libMusic} alt={"GIF"} w={"50px"} h={"50px"} />
                <Text>Cuáles son los temas que no pueden faltar?</Text>
              </VStack>

              <UnorderedList listStyleType={"none"} p={0} m={0} mb={"10px"}>
                {songs.map((song, index) => (
                  <ListItem
                    key={index}
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    mb={"10px"}
                  >
                    {song}
                    {"  "}
                    <Button
                      variant={"delete"}
                      type={"button"}
                      onClick={() => removeSong(index)}
                    >
                      QUITAR
                    </Button>
                  </ListItem>
                ))}
              </UnorderedList>

              <FormControl mb={"20px"}>
                <FormLabel htmlFor="song">Tema</FormLabel>
                <HStack id="song" gap={3}>
                  <Input
                    value={newSong}
                    onChange={(e) => setNewSong(e.target.value.trimStart())}
                    focusBorderColor={"#5e9a8e"}
                  />
                  <Button
                    variant={"add"}
                    type={"button"}
                    isDisabled={newSong.trim() === ""}
                    onClick={addSong}
                  >
                    AGREGAR
                  </Button>
                </HStack>
              </FormControl>

              <HStack w={"100%"} justifyContent={"end"}>
                <VStack alignItems={"end"}>
                  <Text fontWeight={"extrabold"}>* campos requeridos</Text>
                  <Button
                    variant={"submit"}
                    type="submit"
                    isDisabled={formIsDisabled()}
                  >
                    ENVIAR
                  </Button>
                </VStack>
              </HStack>
            </form>
          </VStack>
        )}

        {errorDNIMsg && (
          <VStack>
            <Alert status="error">
              <AlertIcon />
              El DNI ingresado ya se encuentra confirmado
            </Alert>
          </VStack>
        )}

        {errorMsg && (
          <VStack>
            <Alert status="error">
              <AlertIcon />
              Algo salió mal, volvé a intentar por favor
            </Alert>
          </VStack>
        )}
      </VStack>
    </SectionWrapper>
  );
};
