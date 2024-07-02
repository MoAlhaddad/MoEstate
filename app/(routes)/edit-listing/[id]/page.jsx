"use client"
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
function EditListing(){
    return (
        <div className="px-10 md:px-36 my-10">
            <h2 className="font-bold text-xl">Enter some more details of your potential project</h2>
       <div className="p-8 rounded-;g shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex flex-col gap-2">
                <h2 className="text-lg text-slate-500 ">Parcel or Building</h2>
        <RadioGroup defaultValue="Parcel">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Parcel" id="Parcel" />
    <Label htmlFor="Parcel">Parcel</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="Building" id="Building" />
    <Label htmlFor="Building">Building</Label>
  </div>
</RadioGroup>
        </div>
       </div>
        </div>
        </div>
    )
}

export default EditListing