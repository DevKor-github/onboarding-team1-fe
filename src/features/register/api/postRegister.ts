import { api } from '@lib/api';
import { MutationConfig } from '@lib/react-query';
import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';
import { RegisterType } from '../types/register';

type PostRegisterRequest = RegisterType;

type PostRegisterResponse = {};

const postRegister = (data: FormData): Promise<PostRegisterResponse> => {
  console.log(data);
  return api.post('/users/signup', data);
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
