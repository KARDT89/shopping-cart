import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { slugify } from "../../utils/slugify";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/validations/productForm.js";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form.jsx";
import { PRODUCT_FIELDS } from "@/constants/productFields.js";
import { Button } from "@/components/ui/button.jsx";
import { useEffect } from "react";

const AddProductForm = () => {
  const form = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      slug: "",
      description: "",
      category: "",
      image: "",
      price: "0",
      rating: "0",
      reviews: "0",
    }
  });


  const handleSubmit = (e) => {
    console.log(e);
  };

  const watchTitle = form.watch("title");

  useEffect(() => {
    form.setValue("slug", slugify(watchTitle));
  }, [form, watchTitle]);

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={"w-100 font-mono flex flex-col gap-6"}
        >
          {PRODUCT_FIELDS.map(product => (
            <FormField
              key={product.id}
              control={form.control}
              name={product.id}
              render={({ field }) => (
                <FormItem className={"relative"}>
                  <FormLabel
                    label={product.id}
                    htmlFor={product.id}
                  >
                    {product.label}
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type={product.type}
                      readOnly={product.readOnly}
                      className={"text-sm px-4 py-1"}
                    />
                  </FormControl>
                  <FormMessage className={"absolute text-xs left-1 top-[3.7rem] text-red-500"} />
                </FormItem>
              )}
            />
          ))}

          <Button
            className={"w-full"}
            type="submit"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Processing..." : "Update"}
          </Button>
        </form>
      </Form>
      <DevTool control={form.control} />
    </div>
  );
};

export default AddProductForm;
