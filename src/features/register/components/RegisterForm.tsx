import { useForm } from 'react-hook-form';

import CameraIcon from '../assets/camera_icon.svg';
import { usePostRegister } from '../api/postRegister';

interface IAuthForm {
  name: string;
  password: string;
  passwordCheck: string;
  profileImg: File;
  extraError?: string;
}

export const RegisterForm = () => {
  const registerMutation = usePostRegister({});

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IAuthForm>({ mode: 'onBlur' });

  const isValid = (data: IAuthForm) => {
    if (data.password !== data.passwordCheck) {
      setError(
        'passwordCheck', // 에러 핸들링할 input요소 name
        { message: '비밀번호가 일치하지 않습니다.' }, // 에러 메세지
        { shouldFocus: true }, // 에러가 발생한 input으로 focus 이동
      );
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="mb-7 mt-14 text-lg font-semibold text-label1">회원가입</div>
      <form
        className="flex flex-col items-center"
        onSubmit={handleSubmit((data) => {
          if (isValid(data)) registerMutation.mutate({ ...data });
        })}
      >
        <input {...register('name', { required: true })} type="text" className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="이름" />
        <input {...register('password', { required: true })} type="password" className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="비밀번호" />
        <input
          {...register('passwordCheck', { required: true })}
          type="password"
          className="h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4"
          placeholder="비밀번호 확인"
        />
        <input {...register('profileImg', { required: true })} id="profile_img" type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" className="hidden" placeholder="프로필 이미지" />
        <div className="text-base text-red-500">{errors?.passwordCheck?.message}</div>
        <label htmlFor="profile_img" className="mb-3 mt-3 flex h-12 w-72 cursor-pointer items-center rounded-lg border border-label4 bg-[#F4F4F4] px-3 py-2 text-base text-label4">
          <div className="mr-2 h-5 w-5">
            <CameraIcon />
          </div>
          프로필 이미지
        </label>
        <button type="submit" className="mt-14 h-12 w-72 rounded-lg bg-label2 text-bgwhite">
          회원가입
        </button>
      </form>
    </div>
  );
};
