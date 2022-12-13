export interface ITitleText {
    title: string;
    description:string;
  }
  
  const TitleText: React.FC<ITitleText> = ({ title,description }) => {
    return(
        <div className="flex flex-col list-none">
        <li className="text-3xl font-bold ml-8">{title}</li>
        <li className="text-2xl break-words">{description}</li>
        </div>
    )
    }
  export default TitleText;