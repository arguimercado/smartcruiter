import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";


type FormSelectFieldProps<T extends FieldValues> = {
   label?: string;
   name: Path<T>;
   description?: string;
   control?: Control<T>;
   className?: string;
   options: SelectOption[];
   placeholder?: string;
   disabled?: boolean;
};

const FormSelectField = <T extends FieldValues>({
   label,
   name,
   description,
   control,
   options,
   disabled = false,
   placeholder = "Select an option",
   ...props
}: FormSelectFieldProps<T>) => {

   
   return (
      <FormItem>
         {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
         <FormControl>
            <Controller
               name={name}
               control={control}
               render={({ field }) => (
                  <div className="relative">
                     <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={disabled}
                        {...props}
                     >
                        <SelectTrigger
                           id={name}
                           className={'w-full'}
                        >
                           <SelectValue placeholder={placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                           {options.map((option) => (
                              <SelectItem
                                 key={option.value}
                                 value={option.value}
                                 disabled={option.disabled}
                              >
                                 {option.label}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </div>
               )}
            />
         </FormControl>
         {description && <FormDescription>{description}</FormDescription>}
         <FormMessage />
      </FormItem>
   );
};

export default FormSelectField;
