import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import CarsService from "../../../../Services/Cars.service";
import CarModelsService from "../../../../Services/CarModelsService";
import CarModel from "../../../../Models/CarModel.model";
import { CarCategory } from "../../../../Models/CarCategory.enum";
import { MechanicConditions } from "../../../../Models/MechanicConditions.enum";

interface RegisterFormProps {
    displayAuthForm: boolean;
    setDisplayAuthForm: (value: boolean) => void;
    fetchCars: () => void;
}

type Inputs = {
    // --- CAR DATA ---

    address: string;
    imagePath: string;
    active: boolean;
    carModelId: number;
    carValueInDollars: number;
    category: string;
    extraInformation: string;
    manual: boolean;
    mechanicCondition: string;
    mileage: number;
    rate: number;
    rentAmountDay: number;
    seating: number;
    year: number;
    clientId: number;
    licensePlate: string;
    insuranceType: string;
};

const schema = yup
    .object({
        address: yup.string().required("La dirección es requerida"),
        active: yup.bool().required("Seleccione el estado."),
        carModelId: yup.number().required("Seleccione el modelo de carro."),
        carValueInDollars: yup.number().min(0).max(999999999).required("Ingrese el valor del carro"),
        category: yup.string().required("Seleccione la categoria."),
        extraInformation: yup.string().required("Ingrese informacion adicional."),
        manual: yup.bool().required("Seleccione el tipo de cambio."),
        mechanicCondition: yup.string().required("Ingrese la condicion del carro."),
        mileage: yup.number().min(0).max(999999999).required("Ingrese el recorrido."),
        rate: yup.number().min(0).max(999999999).required("Ingrese el rate."),
        rentAmountDay: yup.number().min(0).max(999999999).required("Ingrese el monto de renta mensual."),
        seating: yup.number().min(0).max(999999999).required("Ingrese el numero de asientos."),
        year: yup.number().min(0).max(999999999).required("Ingrese el año."),
        licensePlate: yup.string().required("Ingrese la licencia."),
        insuranceType: yup.string().required("Ingrese la aseguradora."),
    })
    .required();

export const RegisterCarForm = (props: RegisterFormProps) => {
    const [loading, setLoading] = useState(false);
    const [carModels, setCarmodels] = useState<CarModel[]>([]);
    const toastRegister = useRef<Toast>(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const showToastInvalidForm = () => {
        toastRegister.current?.show({
            severity: "error",
            summary: "Error",
            detail: "Formulario inválido",
            life: 3000,
        });
    };

    const showToastRegisterSucess = () => {
        toastRegister.current?.show({
            severity: "success",
            summary: "Registro",
            detail: "Registro de carro exitoso",
            life: 3000,
        });
    };

    const showToastRegisterError = () => {
        toastRegister.current?.show({
            severity: "error",
            summary: "Registro",
            detail: "Error al registrar carro",
            life: 3000,
        });
    };

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);
        await CarsService.createCar(data)
            .then((res) => {
                showToastRegisterSucess();
                props.fetchCars()
                props.setDisplayAuthForm(false)
            })
            .catch((err) => {
                console.log(err)
                showToastRegisterError();
            })
        setLoading(false);
    };

    useEffect(() => {
        //if there are errors, show the general information form
        if (Object.keys(errors).length > 0) {
            showToastInvalidForm();
        }
    }, [errors]);

    useEffect(() => {
        fetchCarModels()
        register("clientId", { value: JSON.parse(localStorage.getItem("USER") || "").id })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchCarModels = async () => {
        await CarModelsService.getAllCarModels()
            .then((res) => {
                setCarmodels(res.data.content)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            <Toast ref={toastRegister} position="bottom-right" />

            <h1 className="text-[32px] font-bold text-center mb-4">Añadir nuevo auto</h1>
            <form className="p-fluid w-[320px] sm:w-[480px] lg:w-[846px]" onSubmit={(e) => e.preventDefault()} >
                <div className="block lg:flex sm:px-8">

                    <div className="w-[330px] sm:w-full lg:w-[352px] mt-[13px] lg:mr-[70px]">
                        <div className="">
                            <label htmlFor="carModelId" >Modelo de carro</label>
                            <select id="carModelId" {...register("carModelId")} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                {carModels.length !== 0 && carModels.map((element) =>
                                    <option key={element.id} value={element.id}>{element.name}</option>
                                )}
                            </select>
                        </div>

                        <div className="mt-[12px]">
                            <label htmlFor="category">Categoria</label>
                            <select id="category"{...register("category")} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                {Object.keys(CarCategory).map((element) =>
                                    <option key={element} value={element}>{element}</option>
                                )}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="mechanicCondition" className="block mt-3">
                                Condicion Mecanica
                            </label>
                            <select id="mechanicCondition"{...register("mechanicCondition")} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                {Object.keys(MechanicConditions).map((element) =>
                                    <option key={element} value={element}>{element}</option>
                                )}
                            </select>
                        </div>

                        <div className="mt-[12px]">
                            <label htmlFor="manual">Manual</label>
                            <select id="manual"{...register("manual", { setValueAs: (value) => value === "true" ? true : false })} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                <option value={"true"} >True</option>
                                <option value={"false"} >False</option>
                            </select>
                        </div>

                        <div className="mt-[12px]">
                            <label htmlFor="active" >Estado</label>
                            <select id="active" {...register("active", { setValueAs: (value) => value === "true" ? true : false })} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                <option value={"true"} >True</option>
                                <option value={"false"} >False</option>
                            </select>
                        </div>

                        <div className="mt-[12px]">
                            <label htmlFor="insuranceType">
                                Tipo de Seguro
                            </label>
                            <select id="insuranceType" {...register("insuranceType")} className="w-full border-[1px] border-gray-300 h-[50px] rounded-md px-2">
                                <option value="RIMAC">RIMAC</option>
                                <option value="PACIFICO">PACIFICO</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="seating" className="block mt-3">
                                Asientos
                            </label>
                            <InputText
                                id="seating"
                                placeholder="Ingrese Numero de Asientos"
                                disabled={loading}
                                className={errors.seating && "p-invalid"}
                                {...register("seating")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.seating && (
                                <small id="seating-help" className="p-error block">
                                    {errors.seating?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="address" className="block mt-3">
                                Dirección
                            </label>
                            <InputText
                                id="address"
                                placeholder="Ingrese su dirección"
                                disabled={loading}
                                className={errors.address && "p-invalid"}
                                {...register("address")}
                            />
                            {errors.address && (
                                <small id="address-help" className="p-error block">
                                    {errors.address?.message}
                                </small>
                            )}
                        </div>
                    </div>

                    <div className="w-[330px] sm:w-full lg:w-[352px] lg:ml-3">
                        <div>
                            <label htmlFor="imagePath" className="block mt-3">
                                URL de imagen del Carro
                            </label>
                            <InputText
                                id="imagePath"
                                placeholder="Ingrese la URL de su imagen del Carro"
                                disabled={loading}
                                className={errors.imagePath && "p-invalid"}
                                {...register("imagePath")}
                            />
                            {errors.imagePath && (
                                <small id="imagePath-help" className="p-error block">
                                    {errors.imagePath?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="carValueInDollars" className="block mt-3">
                                Valor del Carro en Dolares
                            </label>
                            <InputText
                                id="carValueInDollars"
                                placeholder="Ingrese el Valor del Carro en Dolares"
                                disabled={loading}
                                className={errors.carValueInDollars && "p-invalid"}
                                {...register("carValueInDollars")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.carValueInDollars && (
                                <small id="carValueInDollars-help" className="p-error block">
                                    {errors.carValueInDollars?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="extraInformation" className="block mt-3">
                                Informacion Extra
                            </label>
                            <InputText
                                id="extraInformation"
                                placeholder="Ingrese Informacion Extra"
                                disabled={loading}
                                className={errors.extraInformation && "p-invalid"}
                                {...register("extraInformation")}
                            />
                            {errors.extraInformation && (
                                <small id="extraInformation-help" className="p-error block">
                                    {errors.extraInformation?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="mileage" className="block mt-3">
                                Kilometraje
                            </label>
                            <InputText
                                id="mileage"
                                placeholder="Ingrese el Kilometraje"
                                disabled={loading}
                                className={errors.mileage && "p-invalid"}
                                {...register("mileage")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.mileage && (
                                <small id="mileage-help" className="p-error block">
                                    {errors.mileage?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="rate" className="block mt-3">
                                Velocidad
                            </label>
                            <InputText
                                id="rate"
                                placeholder="Ingrese la Velocidad"
                                disabled={loading}
                                className={errors.rate && "p-invalid"}
                                {...register("rate")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.rate && (
                                <small id="rate-help" className="p-error block">
                                    {errors.rate?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="rentAmountDay" className="block mt-3">
                                Costo de Renta Diaria
                            </label>
                            <InputText
                                id="rentAmountDay"
                                placeholder="Ingrese el Costo de Renta Diaria"
                                disabled={loading}
                                className={errors.rentAmountDay && "p-invalid"}
                                {...register("rentAmountDay")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.rentAmountDay && (
                                <small id="rentAmountDay-help" className="p-error block">
                                    {errors.rentAmountDay?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="year" className="block mt-3">
                                Año
                            </label>
                            <InputText
                                id="year"
                                placeholder="Ingrese Año del Carro"
                                disabled={loading}
                                className={errors.year && "p-invalid"}
                                {...register("year")}
                                type="number"
                                min={0}
                                max={999999999}
                                defaultValue={0}
                            />
                            {errors.year && (
                                <small id="year-help" className="p-error block">
                                    {errors.year?.message}
                                </small>
                            )}
                        </div>

                        <div>
                            <label htmlFor="licensePlate" className="block mt-3">
                                Placa
                            </label>
                            <InputText
                                id="licensePlate"
                                placeholder="Ingrese su dirección"
                                disabled={loading}
                                className={errors.licensePlate && "p-invalid"}
                                {...register("licensePlate")}
                            />
                            {errors.licensePlate && (
                                <small id="licensePlate-help" className="p-error block">
                                    {errors.licensePlate?.message}
                                </small>
                            )}
                        </div>
                    </div>

                </div>
                    {loading ? (
                        <div className="flex">
                            <ProgressSpinner
                                style={{ width: "50px", height: "50px" }}
                                strokeWidth="4"
                                className="!mt-6 !mx-auto"
                            />
                        </div>
                    ) : (
                        <>
                            <Button
                                label="Añadir"
                                className="!mt-6 mb-auto btn-primary"
                                onClick={handleSubmit(onSubmit)}
                            />

                            <Button
                                label="Cancelar"
                                className="!mt-2 mb-auto p-button-outlined btn-secondary"
                                onClick={() => props.setDisplayAuthForm(!true)}
                            />
                        </>
                    )}
            </form>
        </div>
    );
};

export default RegisterCarForm;