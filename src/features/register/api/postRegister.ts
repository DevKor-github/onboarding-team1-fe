import { api } from '@lib/api';
import { MutationConfig } from '@lib/react-query';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';

type PostRegisterRequest = {
  name: string;
  password: string;
  profileImg: File;
};

type PostRegisterResponse = {};

const postRegister = (data: PostRegisterRequest): Promise<PostRegisterResponse> => {
  return api.post('/user/signup', data);
};

type UsePostRegisterOptions = {
  mutationConfig?: MutationConfig<typeof postRegister>;
};

export const usePostRegister = ({ mutationConfig }: UsePostRegisterOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    mutationFn: postRegister,
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ['register'],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
  });
};
