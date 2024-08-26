import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@utils/cn';
import { FieldValues, FormProvider, SubmitHandler, UseFormProps, UseFormReturn, useForm } from 'react-hook-form';
import { ZodType } from 'zod';

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  schema: Schema;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

const Form = <Schema extends ZodType<any, any, any>, TFormValues extends FieldValues = z.infer<Schema>>({ onSubmit, children, className, options, id, schema }: FormProps<TFormValues, Schema>) => {
  const form = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <FormProvider {...form}>
      <form className={cn('space-y-6', className)} onSubmit={form.handleSubmit(onSubmit)} id={id}>
        {children(form)}
      </form>
    </FormProvider>
  );
};

export { Form };
