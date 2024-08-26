import { useForm } from 'react-hook-form';

import CameraIcon from '../assets/camera_icon.svg';
import { usePostRegister } from '../api/postRegister';
import { RegisterType } from '../types/register';
import { useNavigate } from 'react-router-dom';

interface IAuthForm extends RegisterType {
  profileImgList: FileList;
  passwordCheck: string;
  extraError?: string;
  [key: string]: any;
}

export const RegisterForm = () => {
  const navigate = useNavigate();
  const registerMutation = usePostRegister({
    mutationConfig: {
      onSuccess: () => navigate('/login'),
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<IAuthForm>({ mode: 'onBlur' });

  const onSubmit = (data: IAuthForm) => {
    const formData = new FormData();

    for (const key in data) {
      if (key === 'profileImgList') {
        formData.append('profileImg', data[key][0]);
      } else if (key === 'email') {
        formData.append(key, data[key]);
        formData.append('nickname', data[key]);
      } else {
        formData.append(key, data[key]);
      }
    }
    registerMutation.mutate(formData);
  };

  const isValid = (data: IAuthForm) => {
    if (data.password !== data.passwordCheck) {
      setError('passwordCheck', { message: '비밀번호가 일치하지 않습니다.' }, { shouldFocus: true });
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="mb-7 mt-14 text-lg font-semibold text-label1">회원가입</div>
      <form
        className="flex flex-col items-center"
        encType="multipart/form-data"
        onSubmit={handleSubmit((data) => {
          if (isValid(data)) onSubmit(data);
        })}
      >
        <input {...register('email', { required: true })} type="text" className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="이름" />
        <input {...register('password', { required: true })} type="password" className="mb-3 h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4" placeholder="비밀번호" />
        <input
          {...register('passwordCheck', { required: true })}
          type="password"
          className="h-12 w-72 rounded-lg border border-label4 px-3 py-2 text-base placeholder-label4"
          placeholder="비밀번호 확인"
        />
        <input {...register('profileImgList', { required: true })} id="profile_img" type="file" accept="image/*" className="hidden" placeholder="프로필 이미지" />
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
