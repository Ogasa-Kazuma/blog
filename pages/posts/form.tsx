import { useForm } from "react-hook-form";

function DiaryPage() {
  return(
    <div>
      <SendForm/>
    </div>
  )
}

function SendForm(props){
  type FormData = {
    weight: number;
    tomorrowSchedule: string;
};

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    criteriaMode: "all",
    defaultValues: {
        weight: 0,
        tomorrowSchedule: ''
    }
  });
  
const handleOnSubmit = (data: FormData) => {
  console.log(data);
  return false;
}
const handleOnError = (errors: any) => {
  console.log(errors);
  return false;
}
  return (
    <form onSubmit={handleSubmit(handleOnSubmit, handleOnError)}>
      <div>
        <input
        // 数字以外でも通ってしまう
          {...register("weight", {
            required: "体重を入力してください",
            max : {
              value: 100.0,
              message: '100.kg以下で指定してください。'
            },
            validate: (value) =>
             value < 90 &&
             "100です"
          })}
          type="text"
        />
        {errors.weight && <p style={{ color: "red" }}>{errors.weight.message}</p>}
      </div>
  
      <div>
        
        <input
          {...register("tomorrowSchedule", {
            required: "明日の予定を入力してください",
            maxLength : {
              value: 10000,
              message: '10000文字以下で指定してください。'
            },
          })}
          type="text"
        />
        {errors.tomorrowSchedule && <p style={{ color: "red" }}>{errors.tomorrowSchedule.message}</p>}
      </div>
  
      <button type="submit">送信</button>
    </form>
  );
}

export default DiaryPage;
