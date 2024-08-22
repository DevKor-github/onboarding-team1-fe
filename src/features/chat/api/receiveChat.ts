import { api } from '@lib/api';
import { QueryConfig } from '@lib/react-query';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

type ReceiveChatRequest = {
  sendEmail: string;
};

type ReceiveChatResponse = {
  chatBundle: { text: string; date: Date }[];
};

const receiveChat = (data: ReceiveChatRequest): Promise<ReceiveChatResponse> => {
  return api.get('/chat/receive', { params: data });
};

type UseReceiveChatOptions = {
  sendEmail: string;
  queryConfig?: QueryConfig<typeof receiveChat>;
};

export const useReceiveChat = ({ sendEmail, queryConfig }: UseReceiveChatOptions) => {
  return useQuery({
    queryKey: [sendEmail],
    queryFn: () => receiveChat,
    ...queryConfig,
  });
};
