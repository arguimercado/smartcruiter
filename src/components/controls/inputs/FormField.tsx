import React from 'react'
import {FormControl, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Control, Controller, FieldValues, Path} from "react-hook-form";
import { Textarea } from '@/components/ui/textarea';


interface  FormFieldProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>,
  label: string,
  placeholder?: string,
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local' | 'month' | 'week' | 'time' | 'color' | 'file',
  textarea?: boolean;
  rows?: number;
  cols?: number;
}

const FormField  = <T extends FieldValues> ({control,name,label,placeholder, type,textarea,rows,cols} : FormFieldProps<T>) => (
  
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          {textarea  ? (
            <Textarea rows={rows} cols={cols} className="input" placeholder={placeholder} {...field} />
          ) : (
            <Input className="input" placeholder={placeholder} {...field} type={type} />

          )}
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />
)
export default FormField
