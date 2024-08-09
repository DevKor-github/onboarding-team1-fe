import { useEffect, useRef, useState } from 'react';

const WS_URL = 'ws://localhost:1234/ws';
const RETRY_LIMIT = 5;

export const useWebSocket = () => {
  const websocketRef = useRef<null | WebSocket>(null);
  const [message, setMessage] = useState();
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    websocketRef.current = new WebSocket(WS_URL);

    const setWebSocket = (wsRef: React.MutableRefObject<null | WebSocket>) => {
      if (wsRef.current) {
        wsRef.current.onopen = () => {
          console.log('connected');
          setLimit(0);
        };

        wsRef.current.onclose = (error) => {
          console.log('onclosed');
          console.log(error);
          if (error.code !== 1000 && limit < RETRY_LIMIT) {
            wsRef.current = new WebSocket(WS_URL);
            setWebSocket(wsRef);
            setLimit(limit + 1);
          }
        };

        wsRef.current.onerror = (error) => {
          console.log('onerror');
          console.log(error);
          if (wsRef.current) wsRef.current.close();
        };

        wsRef.current.onmessage = (event: MessageEvent) => {
          setMessage(event.data);
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
    }
  };

  return { websocketRef, message, sendMessage };
};
