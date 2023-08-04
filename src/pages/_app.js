import { useEffect } from "react";
import "../styles/globals.css";
import MainContainer from "../components/MainContainer";
import { SessionProvider } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/Data/api";
import { getSession } from "next-auth/react";
import axios from "axios";

function MyApp({ Component, pageProps, session }) {
  useEffect(() => {
    const checkUserRegistration = async () => {
      const session = await getSession();

      if (session?.user) {
        const { email, name, image } = session.user;

        try {
          await axios.post(
            "http://localhost:5071/api/Users/check-user-registration",
            {
              userEmail: email,
              userName: name,
              urlImage: image,
            }
          );

          // Usuário cadastrado, redirecione para a página principal ou faça qualquer outra ação
          // ...
        } catch (error) {
          const { email, name, image } = session?.user || {};

          if (email && name) {
            try {
              await api.post("/Users", {
                userEmail: email,
                userName: name,
                urlImage: image,
                isCompany: false,
              });

              // Usuário criado com sucesso, redirecione para a página principal ou faça qualquer outra ação
              // ...
            } catch (error) {
              console.error("Erro ao criar o usuário", error);
            }
          }
          console.error("Erro ao verificar o registro do usuário", error);
        }
      }
    };

    checkUserRegistration();
  }, []);

  return (
    <SessionProvider session={session}>
      <MainContainer>
        <Component {...pageProps} />
        <ToastContainer
          autoClose={2000}
          position={toast.POSITION.BOTTOM_LEFT}
        />
      </MainContainer>
    </SessionProvider>
  );
}

export default MyApp;
