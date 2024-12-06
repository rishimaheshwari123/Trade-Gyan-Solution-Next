import { useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = () => {

  const BASE_URL = 'https://api.tradegyan.co'
  // const BASE_URL = process.env.NEXT_PUBLIC_SOCKET_URL


  useEffect(() => {
    const socket = io(BASE_URL); // Update with your server URL

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });


    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

  }, []);

  return null;
};

export default useSocket;
