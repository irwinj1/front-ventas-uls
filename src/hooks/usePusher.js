// src/hooks/usePusher.js
import { useEffect } from 'react';
import Pusher from 'pusher-js';

export default function usePusher(tokenActual, onFirmado) {
  useEffect(() => {
    // Habilita logging detallado
    Pusher.logToConsole = true;
    
    const pusher = new Pusher('643e6d401bfff00bb236', {
        cluster: 'us2',
        encrypted: true,
        
    });

    console.log('Pusher instance:', pusher);

    const channel = pusher.subscribe('documentos');
    console.log('Channel subscribed:', channel);

    channel.bind('DocumentoFirmado', (data) => {
        console.log('Evento recibido:', data);
    });

    // Para ver todos los eventos disponibles
    channel.bind_global((event, data) => {
        console.log(`Evento global recibido: ${event}`, data);
    });

    return () => {
        channel.unbind_all();
        channel.unsubscribe();
        pusher.disconnect();
    };
  }, [tokenActual, onFirmado]);
}