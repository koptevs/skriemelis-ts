import { Head, router, usePage } from "@inertiajs/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast, toast } from "@/components/hooks/use-toast";
import { Button } from "@/components/ui/button";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

import { cn } from "@/lib/utils";

const formSchema = z.object({
    regNumber: z
        .string()
        .regex(new RegExp(/^[0-9][C,c][L,l][0-9][0-9][0-9][0-9][0-9][0-9]$/), {
            message: "regNumber is required and must look like 5CL223322",
        }),
    factoryNumber: z.string(),
    liftType: z.enum(["elektriskais", "hidrauliskais"], {
        message: "Can be of value 'elektriskais' or 'hidrauliskais'",
    }),
    liftCategory: z.enum(["CE", "1", "2", "3"], {
        message: "Can be of value 'CE', '1', '2', '3'",
    }),
    model: z.string(),
    speed: z.string(),
    load: z.string(),
    manufacturer: z.string(),
    installer: z.string(),
    installationYear: z.string(),
    floorsServiced: z.string(),
    address: z.string(),
    addressCity: z.string(),
    addressCountry: z.string(),
    addressPostalCode: z.string(),
    liftManager: z.string(),
    notes: z.string(),
    latitude: z.string(),
    longitude: z.string(),
    birUrl: z.string(),
    buildingSeries: z.string(),
    inspectionStatus: z.string(),
    entryCode: z.string(),
    nextInspectionDate: z.string(),
});

export default function Create({
    liftManagers,
}: {
    liftManagers: { name: string; id: string }[];
}) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onTouched",
        defaultValues: {
            regNumber: "",
            factoryNumber: "",
            liftType: `elektriskais`,
            liftCategory: "CE", //
            model: "",
            speed: "",
            load: "",
            manufacturer: "",
            installer: "",
            installationYear: "",
            floorsServiced: "",
            address: "",
            addressCity: "Rīga",
            addressCountry: "Latvija",
            addressPostalCode: "LV-1000",
            liftManager: "",
            notes: "",
            latitude: "",
            longitude: "",
            birUrl: "",
            buildingSeries: "",
            inspectionStatus: "",
            entryCode: "",
            nextInspectionDate: "",
        },
    });

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;
    const { errors: inertiaErrors } = usePage().props;

    async function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-xs text-white">
                        {/* Lift added with {"\n"}Reg. number {data.regNumber} */}
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        });
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("Values: ", data);
        // const JSONData = JSON.stringify(values);
        // router.post(route("lifts.store"), data, {
        //     errorBag: "createLift",
        // });
    }

    const serviceCompanies = Object.entries(liftManagers).map(function (entry) {
        return {
            id: entry[0],
            label: `${entry[0]} - ${entry[1]}`,
        };
    });
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Add new lift
                </h2>
            }
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* <pre>{JSON.stringify(liftManagers, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(serviceCompanies, null, 2)}</pre> */}
                {/* <div className="flex items-center justify-center"> */}
                {/* {JSON.stringify(typeof inertiaErrors)} */}
                {Object.keys(inertiaErrors).length !== 0 && (
                    <div>
                        <p>Inertia Errors</p>
                        <pre
                            className={"text-sm text-red-600 dark:text-red-400"}
                        >
                            {JSON.stringify(inertiaErrors, null, 2)}
                        </pre>
                    </div>
                )}
                {/* <div className="mt-16 max-w-[500px] rounded-lg border p-4 pb-6 shadow-[0px_0px_20px_-2px_rgba(0,_0,_0,_0.1)]"> */}
                {/* <div className="flex items-center justify-center space-x-2 py-4 font-bold">
                <Lock
                    size={16}
                    // color="#34756a"
                    // color="hsl(var(--destructive))"
                    strokeWidth={3}
                    className="inline text-orange-600"
                />
                <div>SKRIEMELIS</div>
            </div> */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="mb-4 mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                            <FormField
                                control={form.control}
                                name="regNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Reg. number</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="regNumber"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Enter BIR reg. nr. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="factoryNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Factory Number</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="May be empty"
                                                {...field}
                                                autoComplete="factoryNumber"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Enter your name. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="liftType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Lift type</FormLabel>
                                        <FormControl>
                                            <Input
                                                // placeholder="shadcn"
                                                {...field}
                                                autoComplete="liftType"
                                                // className="min-w-[250px] sm:min-w-[400px]"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            {/* Enter BIR reg. nr. */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="liftManager"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Lift manager" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {serviceCompanies.map(
                                                    function (serviceCompany) {
                                                        return (
                                                            <SelectItem
                                                                key={
                                                                    serviceCompany.id
                                                                }
                                                                value={
                                                                    serviceCompany.id
                                                                }
                                                            >
                                                                {
                                                                    serviceCompany.label
                                                                }
                                                            </SelectItem>
                                                        );
                                                    }
                                                )}
                                            </SelectContent>
                                        </Select>
                                        <FormDescription>
                                            {/* You can manage email addresses in your{" "} */}
                                            {/* <Link href="/examples/forms">
                                            email settings
                                        </Link>
                                        . */}
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/*  <Autocomplete
                            id="liftManager"
                            // disablePortal
                            clearOnEscape
                            options={serviceCompanies}
                            // sx={{ width: 300 }}
                            fullWidth
                            autoHighlight
                            value={
                                value
                                    ? (serviceCompanies.find((option) => {
                                          return value === option.id;
                                      }) ?? null)
                                    : null
                            }
                            onChange={(event, newValue) => {
                                onChange(newValue ? newValue.id : null);
                            }}
                            getOptionLabel={(option) => {
                                return option.label;
                            }}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Lift Manager"
                                    fullWidth
                                    size="small"
                                />
                            )}
                        /> */}
                        </div>
                        <Button type="submit">
                            {" "}
                            {/* disabled={!form.formState.isValid} */}
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </AuthenticatedLayout>
    );
}
