import { ChatProps } from '@features/chat/types/chat';
import { useEffect, useRef, useState } from 'react';

const WS_URL = import.meta.env.VITE_WEBSOCKET_URL;
const RETRY_LIMIT = 5;

export const useWebSocket = (query: string, userId: string, textArray: ChatProps[], setTextArray: React.Dispatch<React.SetStateAction<ChatProps[]>>) => {
  const websocketRef = useRef<null | WebSocket>(null);
  const [message, setMessage] = useState('');
  const retryCount = useRef(0);

  useEffect(() => {
    websocketRef.current = new WebSocket(WS_URL + query);

    const setWebSocket = (wsRef: React.MutableRefObject<null | WebSocket>) => {
      if (wsRef.current) {
        wsRef.current.onopen = () => {
          console.log('connected');
          retryCount.current = 0;
        };

        wsRef.current.onclose = (error) => {
          console.log('onclosed');
          console.log(error);
          if (error.code !== 1000 && retryCount.current < RETRY_LIMIT) {
            wsRef.current = new WebSocket(WS_URL);
            setWebSocket(wsRef);
            retryCount.current += 1;
          }
        };

        wsRef.current.onerror = (error) => {
          console.log('onerror');
          console.log(error);
          if (wsRef.current) wsRef.current.close();
        };

        wsRef.current.onmessage = (event: MessageEvent) => {
          console.log('onmessage');
          console.log('userId', userId);
          console.log(event.data);
          setMessage(event.data);
          const date = new Date();
          const chatData = JSON.parse(event.data);
          if (chatData.senderId != userId) {
            setTextArray((prevState) => [...prevState, { text: chatData.message, time: date, type: 'OTHER' }]);
          } else {
            setTextArray((prevState) => [...prevState, { text: chatData.message, time: date, type: 'MY' }]);
          }
        };
      }
    };

    setWebSocket(websocketRef);

    return () => {
      if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
        console.info('WebSocket 끊김');
        websocketRef.current.close();
      }
    };
  }, []);

  const sendMessage = (message: string) => {
    if (websocketRef.current && websocketRef.current.readyState === WebSocket.OPEN) {
      websocketRef.current.send(message);
      console.log(message);
    }
  };

  return { websocketRef, message, sendMessage };
};

export type WebSocketType = {
  websocketRef: React.MutableRefObject<WebSocket | null>;
  message: string;
  sendMessage: (message: string) => void;
};
