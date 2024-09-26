"use client";
import OnSubmitBtn from "@/app/components/Form Inputs/OnSubmitButton";
import TextareaInput from "@/app/components/Form Inputs/TextAreaInput";
import FormInput from "@/app/components/Form Inputs/TextInputs";
import FormHeader from "@/app/components/backend/FormHeader";
import { generateSlug } from "@/lib/generateSlug";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";

export default function NewCatogery({ label, name }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    console.log(data);
  }

  return (
    <div>
      <FormHeader title="New Catogery" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 sm:p-6 md:p-8 mx-auto my-3
        border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <FormInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Category Discription"
            name="title"
            register={register}
            errors={errors}
          />
        </div>

        <OnSubmitBtn
          isLoading={false}
          buttonTitle="Create Category"
          loadingButtonTile="Creating Category Please Wait"
        />
      </form>
    </div>
  );
}
