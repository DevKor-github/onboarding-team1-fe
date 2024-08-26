import { api } from '@lib/api';
import { MutationConfig } from '@lib/react-query';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';

type SendChatRequest = {
  messageType: 'ENTER' | 'TALK';
  chatRoomId: string;
  senderId: number;
  message: string;
  timestamp: Date;
};

type SendChatResponse = {};

const sendChat = (data: SendChatRequest): Promise<SendChatResponse> => {
  return api.post('/chat/send', data);
};

type UseSendChatOptions = {
  receiveEmail: string;
  mutationConfig?: MutationConfig<typeof sendChat>;
};

export const useSendChat = ({ receiveEmail, mutationConfig }: UseSendChatOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: sendChat,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: [receiveEmail],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
