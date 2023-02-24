export interface ITitleText {
    title: string;
    description:string;
    style:string;
  }
  
  const TitleText: React.FC<ITitleText> = ({ title,description,style }) => {
    return(
        <div className="flex flex-col list-none">
        <li className="text-3xl font-bold">{title}</li>
        <li className={style}>{description}</li>
        </div>
    )
    }
  export default TitleText;