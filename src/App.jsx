import { useState, useEffect, use } from 'react';
import './App.css';
import AuhtNavigation from './Navigation/Auth';
import DashBoardNavigation from './Navigation/DashBoard';
import { AuthContext, AuthPrivider } from './context/AuthContext';
import usePusher from './hooks/usePusher';
import { useContext } from 'react';
import io from 'socket.io-client';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';


window.Pusher = Pusher;
const AppNavigation = () => {
  const { isLogin } = useContext(AuthContext);
  return isLogin ? <DashBoardNavigation /> : <AuhtNavigation />;
};

function App() {
  const [firmado, setFirmado] = useState(false);
usePusher('643e6d401bfff00bb236', () => {
    console.log('¡Documento firmado!');
    setFirmado(true); // Actualiza tu UI o estado global
  }
);
  useEffect(() => {
    // // Conectar al WebSocket del servidor de NestJS
    // const socket = io('https://1e7f66c5cd576bdbb9ab32aab926670f.serveo.net'); // Asegúrate de usar el puerto correcto

    // // Escuchar el evento 'documentoFirmado'
    // socket.on('DocumentoFirmado', (data) => {
    //   console.log('✅ Conectado con ID:', socket.id);
    //   console.log('Documento firmado:', data);
    //   setFirmado(true);
    // });

    // // Limpiar la conexión cuando el componente se desmonte
    // return () => {
    //   socket.disconnect();
    // };
    const echo = new Echo({
      broadcaster: 'pusher',
      key: '643e6d401bfff00bb236',
      cluster: 'us2',
      forceTLS: true,
    });

    echo.private('documentos')
      .listen('.DocumentoFirmado', (e) => {
        console.log('📄 Documento firmado:', e);
        // setFirmado(true);
      });

    return () => {
      echo.leave('documentos');
    };
  }, []);

  return (
    <AuthPrivider>
      <>
        <AppNavigation />
        {firmado && (
          <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: '#d1e7dd', padding: '10px', borderRadius: '5px', color: '#0f5132' }}>
            ✅ Documento firmado
          </div>
        )}
      </>
    </AuthPrivider>
  );
}

export default App;
