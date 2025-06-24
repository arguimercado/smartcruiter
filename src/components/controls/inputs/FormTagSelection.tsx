import React from "react";
import { Control, FieldValues, Controller, Path } from "react-hook-form";
import { Badge } from "@/components/ui/badge";

import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { SelectOption } from "@/data/types";

interface FormTagSelectionProps<T extends FieldValues> {
   name: Path<T>;
   control: Control<T>;
   options: SelectOption[];
   multiple?: boolean;
   label: string;
   
}

const FormTagSelection = <T extends FieldValues>({
   name,
   control,
   options,
   label,
}: FormTagSelectionProps<T>) => {
   
   return (
      <FormItem>
         {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
         <FormControl>
            <Controller
               name={name}
               control={control}
               render={({ field }) =>  { 
                  const handleChange = (newValue: string) => {
                     field.onChange(newValue);
                  }
                  return (
                     <>
                        <div className="flex flex-wrap gap-2">
                           {options.map((opt) => {
                              const isSelected = field.value === opt.value;
                              
                              
                              return (
                                 <Badge
                                    key={opt.value}
                                    variant={isSelected ? "default" : "outline"}
                                    className={`cursor-pointer px-2 py-2 select-none transition-colors ${
                                       isSelected
                                          ? "bg-blue-600 text-white border-blue-600"
                                          : "bg-white text-gray-700 border-gray-300"
                                    }`}
                                    onClick={() => handleChange(opt.value)}
                                 >
                                    {opt.icon && <opt.icon className=" inline-block" />}
                                    {opt.label}
                                 </Badge>
                              )})}
                        </div>
                     </>
                  )
               }
            }
            />
         </FormControl>
      </FormItem>
   );
};

export default FormTagSelection;
